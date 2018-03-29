import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

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
import Smiler from './Smiler';
import Outils from './outils/Outils';
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
            imagePreviewUrl: [],
            showPicker: false,
            color: "rgba(255,255,255,1)",
            data: []
        }
        this.titreChange = this.titreChange.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.getBody = this.getBody.bind(this);
        this.dropZone = this.dropZone.bind(this);
        this.handlePicker = this.handlePicker.bind(this);
        this.pickedColor = this.pickedColor.bind(this);
    }
    componentDidMount(){
        let $this = this;
        axios.get("/api/data").then(res => {
            $this.setState({
                data: res.data
            })
        })

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
   handlePicker(color){
        this.setState({
            showPicker: !this.state.showPicker
        })
    }
    pickedColor(color){
         this.setState({ color: color.hex })
     }
    
    render() {
        let pageContent = queryString.parse(this.props.location.search);
        let pagemap = pageContent.action;
        let subcategorie = pageContent.subcategorie;
        // console.log(this.state.currentArticle.articlebody);
        // console.log(this.state.currentArticle);
        // console.log("Laravel data: ", this.state.data);
        // console.log(this.state.color);
        // console.log(this.state.currentArticle.image);
        // console.log(this.state.imagePreviewUrl);
        // console.log(this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview);
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
                                <AuteurNav 
                                    activepage={pagemap} 
                                    actiontype={"action"} 
                                />
                            </div>
                            <div className="col col-sm-12 col-md-9">
                                <div className="auteurright">
                                    <h3 className="text-center lead">{ pagemap ? pagemap.toUpperCase()  : "BIENVENUE" }</h3>
                                    <hr />
                                    {
                                        pagemap === "Profil" ?
                                            <Auteurprofil 
                                                preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                                                dz={this.dropZone}
                                                handlePicker={this.handlePicker}
                                                showPicker={this.state.showPicker}
                                                pickedColor={this.pickedColor}
                                                color={this.state.color}
                                            /> :
                                        pagemap === "Mes Articles" ?
                                            <Auteurarticles /> :
                                        pagemap === "Rédiger un article" ?
                                            <Auteurrediger getbd={this.getBody} preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} dz={this.dropZone} titreChange={this.titreChange} imgLoaded={this.imgLoaded} currentArticle={this.state.currentArticle}/> :
                                        pagemap === "Aperçu" ?
                                            <Auteurarticleapercu preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} currentArticle={this.state.currentArticle} /> :
                                        pagemap === "Poster un article" ?
                                            <Auteurposter preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} ap={ this.state.currentArticle } /> :
                                        pagemap === "Messages" ?
                                            <Smiler>
                                                <i className="fab fa-grav smileicon si2" />
                                                <h5> En développement!!!</h5>
                                            </Smiler>
                                                :
                                        pagemap === "Outils" ?
                                            <Outils 
                                                subcategorie={subcategorie}
                                                page={pagemap}
                                                actiontype={"action"} 
                                            />:
                                            <Auteuralertes />
                                    }
                                    {/* { this.state.data.map(i => <p> {i} </p>) } */}
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

