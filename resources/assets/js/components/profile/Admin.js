import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import AdminCard from './admin/AdminCard';
// import Auteurprofil from './Auteurprofil';
// import Auteurarticles from './Auteurarticles';
// import Auteurrediger from './Auteurrediger';
// import Auteurarticleapercu from './Auteurarticleapercu';
// import Auteurposter from './Auteurposter';
import AdminNav from './admin/AdminNav';
import AdminPages from './admin/AdminPages';
import { urlPath } from '../path';
import AdminSubnav from './admin/AdminSubnav';
import Topheader from './Topheader';
import Smiler from './Smiler';
import Outils from './outils/Outils';

import { articles } from '../data/articles';

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {},
            stateArticles: [],
        },
        this.clickSet = this.clickSet.bind(this)
        this.clickUnset = this.clickUnset.bind(this)
        this.csTimer = this.csTimer.bind(this)
    }
   
    componentDidMount(){
        // let data = articles.filter(a => a.categorie === this.state.subcategorie)
        this.setState({
            stateArticles: articles,
            filtre: queryString.parse(this.props.location.search).subcategorie,
        })
    }
    clickSet(){
            this.setState({
                filtre: queryString.parse(this.props.location.search).subcategorie,
            })
        // let data = articles.filter(a => a.categorie === queryString.parse(this.props.location.search).subcategorie)
        setTimeout(()=> this.csTimer(), 1)
    }
    csTimer(){
        let data = articles.filter(a => a.categorie === this.state.filtre)
        console.log("f:",data)
        // console.log("fr",filterr)
        this.setState({
            stateArticles: data
        })
    }
    clickUnset(){
        this.setState({
            stateArticles: articles
        })
    }

    render() {

        let pageContent = queryString.parse(this.props.location.search);
        let type = pageContent.type;
        let subcategorie = pageContent.subcategorie;

        return (
            <div className="profilpage" >
                <div className="profilheader admin">
                   <div className="overlayer">
                        <div className="container">
                            <Topheader />
                            <AdminCard />
                        </div>
                   </div>
                </div>
                <div className="profilbody">
                   <div className="container maincontainer">
                        <div className="row">
                            <div className="col col-sm-12 col-md-3">
                                <AdminNav 
                                    type={type} 
                                    actiontype={"type"} 
                                    
                                />
                            </div>
                            <div className="col col-sm-12 col-md-9">
                                <div className="auteurright">
                                    <h3 className="text-center lead">{ type ? type.toUpperCase()  : "BIENVENUE" }</h3>
                                    <hr />
                                    <AdminSubnav 
                                        tp={type} 
                                        subcat={subcategorie} 
                                        clickSet={this.clickSet} 
                                        clickUnset={this.clickUnset} 
                                    />
                                    <hr />
                                   
                                   {
                                       type === "Outils" ?
                                       <Outils
                                            page={type} 
                                            subcategorie={subcategorie}
                                            actiontype={"type"} 
                                       />   :
                                       type === "Messages" ?
                                       <Smiler>
                                            <i className="fab fa-grav smileicon si2" />
                                            <h5> En développement!!!</h5>
                                        </Smiler>
                                            :
                                        <AdminPages 
                                            type={type} 
                                            subcategorie={subcategorie} 
                                            data={this.state.stateArticles} 
                                        />
                                   }
                                    
                                    {/* {
                                        pagemap === "Profil" ?
                                            <Auteurprofil /> :
                                        pagemap === "Mes Articles" ?
                                            <Auteurarticles /> :
                                        pagemap === "Rédiger un article" ?
                                            <Auteurrediger titreChange={this.titreChange} /> :
                                        pagemap === "Aperçu" ?
                                            <Auteurarticleapercu currentArticle={this.state.currentArticle} /> :
                                        pagemap === "Poster un article" ?
                                            <Auteurposter ap={ this.state.currentArticle } /> :

                                            <Auteuralertes />
                                        
                                    } */}
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

