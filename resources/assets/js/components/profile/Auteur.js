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
            }
        }
        this.titreChange = this.titreChange.bind(this);
    }
    componentDidMount(){
        }

    titreChange(e){
        this.setState({
            ...this.state.currentArticle,
            currentArticle:{
                titre: e.target.value
            }
        })
    }
    render() {
        let pageContent = queryString.parse(this.props.location.search);
        let pagemap = pageContent.action;

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
                                            <Auteurrediger titreChange={this.titreChange} /> :
                                        pagemap === "Aperçu" ?
                                            <Auteurarticleapercu currentArticle={this.state.currentArticle} /> :
                                        pagemap === "Poster un article" ?
                                            <Auteurposter ap={ this.state.currentArticle } /> :

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

