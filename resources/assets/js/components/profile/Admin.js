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
            pubs: [],
            articlesDb: [],
            articlesDb2: [],
            posted: false,
            error: false
        },
        this.clickSet = this.clickSet.bind(this)
        this.clickUnset = this.clickUnset.bind(this)
        this.csTimer = this.csTimer.bind(this)

        this.getpubs = this.getpubs.bind(this); 
        this.getArticles = this.getArticles.bind(this); 

        // this.successMsg = this.successMsg.bind(this); 
        // this.failMsg = this.failMsg.bind(this); 
    }
   
    componentDidMount(){
        // let data = articles.filter(a => a.categorie === this.state.subcategorie)
        let self = this;
        // let pubsUrl = urlPath+"/api/data/publicite/getpub";
        this.setState({
            stateArticles: articles,
            filtre: queryString.parse(this.props.location.search).subcategorie,
        })
        // this.getpubs()
        this.getArticles()
    }

    getpubs(){
        let url = urlPath+"/api/data/publicite/index";
        let self = this;
        axios.get(url)
             .then(res => {
                self.setState({
                    pubs: res.data
            })
        })
    }
    getArticles(){
        let url2 = urlPath+"/api/data/auteur/index";
        let self = this;
        axios.get(url2)
             .then(res => {
                self.setState({
                    articlesDb: res.data.articles,
                    articlesDb2: res.data,
                    pubs: res.data.annonces
            })
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

        let rdcode = Math.floor(Math.random(100,200));

        // console.log("PC", this.props.location.search='hi=ho');
        // console.log("PC_hi", pageContent.hi);
        console.log("pubs::::::: ", this.state.pubs);
        console.log("ARTICLES_DB", this.state.articlesDb);
        console.log("ARTICLES_DB2", this.state.articlesDb2);
        // console.log("RANDOM", rdcode);

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
                                            search={this.props.location.search} 
                                            subcategorie={subcategorie} 
                                            page={pageContent} 
                                            data={this.state.stateArticles} 
                                            pubs={this.state.pubs} 
                                            articles={this.state.articlesDb} 
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

