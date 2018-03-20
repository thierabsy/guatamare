import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import AuteurCard from './auteur/AuteurCard';
import Auteuralertes from './auteur/Auteuralertes';
import Auteurprofil from './auteur/Auteurprofil';
import Auteurarticles from './auteur/Auteurarticles';
import Auteurrediger from './auteur/Auteurrediger';
import Auteurarticleapercu from './auteur/Auteurarticleapercu';
import Auteurposter from './auteur/Auteurposter';
import AuteurNav from './auteur/AuteurNav';
import { urlPath } from '../path';
import Topheader from './Topheader';
// import { Quill } from 'quill';

export default class Auteur extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {
                titre: 'Titre A',
                catégorie: 'Catégorie A',
                resume: 'Resume A',
                image: 'Image A',
                articlebody: 'Body A'
            },
            imagePreviewUrl: []
        }
        this.titreChange = this.titreChange.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.getBody = this.getBody.bind(this);
        this.dropZone = this.dropZone.bind(this);
    }
    componentDidMount(){
        }

    titreChange(e){
        this.setState({
            currentArticle: { 
                ...this.state.currentArticle,
                [e.target.name]: e.target.value
            }
        })
    }
    imgLoaded(e){
        this.setState({
            currentArticle: { 
                ...this.state.currentArticle,
                image: e.target.files[0]
            }
        })
    }
    getBody(value){
        this.setState({
            currentArticle: { 
                ...this.state.currentArticle,
                articlebody: value
            }
        })
    }
   dropZone(files){
       this.setState({
           imagePreviewUrl: files
       })
   }
    
    render() {
        let pageContent = queryString.parse(this.props.location.search);
        let pagemap = pageContent.action;
        console.log(this.state.currentArticle.articlebody);
        console.log(this.state.currentArticle);
        console.log(this.state);
        console.log(this.state.currentArticle.image);
        console.log(this.state.imagePreviewUrl);
        console.log(this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview);
        return (
            <div className="profilpage" >
                <div className="profilheader profil">
                   <div className="overlayer">
                        <div className="container">
                            <Topheader />
                            <AuteurCard />
                        </div>
                   </div>
                </div>
                <div className="profilbody">
                   <div className="container maincontainer">
                        <div className="row">
                            <div className="col col-sm-12 col-md-3">
                                <AuteurNav activepage={pagemap} />
                            </div>
                            <div className="col col-sm-12 col-md-9">
                                <div className="auteurright">
                                    <h3 className="text-center lead">{ pagemap ? pagemap.toUpperCase()  : "BIENVENUE" }</h3>
                                    <hr />
                                    {
                                        pagemap === "Profil" ?
                                            <Auteurprofil /> :
                                        pagemap === "Mes Articles" ?
                                            <Auteurarticles /> :
                                        pagemap === "Rédiger un article" ?
                                            <Auteurrediger getbd={this.getBody} preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} dz={this.dropZone} titreChange={this.titreChange} imgLoaded={this.imgLoaded} currentArticle={this.state.currentArticle}/> :
                                        pagemap === "Aperçu" ?
                                            <Auteurarticleapercu preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} currentArticle={this.state.currentArticle} /> :
                                        pagemap === "Poster un article" ?
                                            <Auteurposter preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} ap={ this.state.currentArticle } /> :

                                            <Auteuralertes />
                                    }
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

