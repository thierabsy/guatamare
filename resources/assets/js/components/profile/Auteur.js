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
import Posted from './Posted';
// import { Quill } from 'quill';

export default class Auteur extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {
                titre: localStorage.getItem("titre") || "",
                user_id: "pub123",
                categorie: 'Catégorie',
                resume: localStorage.getItem("resume") || "",
                image: 'Image A',
                articlebody: localStorage.getItem("articlebody") || "",
            },
            profil: {
                nom: "",
                email: "",
                user_id: "pub123",
                pays: "",
                fonction: "",
                bio: "",
                avatar: "",
                color: "",
                linkedin: "",
                facebook: "",
                twitter: "",
                cv: "",
            },
            imagePreviewUrl: [],
            imagePreviewUrlAvatar: [],
            showPicker: false,
            color: "rgba(255,255,255,1)",
            data: [],
            posted: false,
            error: false
        }
        this.titreChange = this.titreChange.bind(this);
        this.profilChange = this.profilChange.bind(this);

        this.imgLoaded = this.imgLoaded.bind(this);
        this.getBody = this.getBody.bind(this);
        this.dropZone = this.dropZone.bind(this);
        this.dropZoneCv = this.dropZoneCv.bind(this);
        this.dropZoneAvatar = this.dropZoneAvatar.bind(this);
        this.handlePicker = this.handlePicker.bind(this);
        this.pickedColor = this.pickedColor.bind(this);

        this.postAuteurProfil = this.postAuteurProfil.bind(this);
        this.postAuteurArticle = this.postAuteurArticle.bind(this);
    }
    componentDidMount(){
        let $this = this;
        axios.get("/api/data/auteur").then(res => {
            $this.setState({
                data: res.data
            })
        })
        // localStorage.setItem("titre", this.state.currentArticle.titre);
        }

    titreChange(e){
        this.setState({
            currentArticle: { 
                ...this.state.currentArticle,
                [e.target.name]: e.target.value
            }
        })
        localStorage.setItem([e.target.name], e.target.value);
    }
    profilChange(e){
        this.setState({
            profil: { 
                ...this.state.profil,
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
           imagePreviewUrl: files,
           currentArticle: {
            ...this.state.currentArticle,
            image: files[0]
           }
       })
   }
   dropZoneCv(files){
       this.setState({
           profil: {
            ...this.state.profil,
            cv: files[0]
           }
       })
   }
   dropZoneAvatar(files){
       this.setState({
            imagePreviewUrlAvatar: files,
            profil: {
                ...this.state.profil,
                avatar: files[0]
            }
       })
   }
   handlePicker(color){
        this.setState({
            showPicker: !this.state.showPicker
        })
    }
    pickedColor(color){
         this.setState({ 
            color: color.hex,
            profil: {
                ...this.state.profil,
                color: color.hex
            }
        })
    }
//********** AFTER POST MESSAGE ******//
    successMsg(res){
        this.setState({
            posted: true
        })
        setTimeout(() => {
            this.setState({
                posted: false
            })
        }, 5000)
    }
    failMsg(e){
        this.setState({
            error: true
        })
        setTimeout(() => {
            this.setState({
                error: false
            })
        }, 5000)
    }
//********** AFTER POST MESSAGE ******//
    postAuteurProfil(e){
        e.preventDefault();
        let data = new FormData();
        for(let key in this.state.profil){
            data.append(key , this.state.profil[key]);
        }
        let url= urlPath+"/api/data/auteur/profil";
        let self = this;
        axios.post(url, data)
            .then((res) => this.successMsg(res))
            .catch((e) => this.failMsg(e))
    }
    postAuteurArticle(e){
        e.preventDefault();
        let data = new FormData();
        for(let key in this.state.currentArticle){
            data.append(key , this.state.currentArticle[key]);
        }
        let url= urlPath+"/api/data/auteur/article";
        let self = this;
        axios.post(url, data)
            .then((res) => this.successMsg(res))
            .catch((e) => this.failMsg(e))

        localStorage.setItem("titre", "");
        localStorage.setItem("categorie", "");
        localStorage.setItem("resume", "");
    }

    // saveLocaleStorage(e){
    //     localStorage.setItem("titre", this.state.currentArticle.titre);
    //     localStorage.setItem("resume", this.state.currentArticle.resume);
    //     localStorage.setItem("articlebody", this.state.currentArticle.articlebody);
    // }
    // saveLocaleStorage(e){
    //     localStorage.getItem("titre");
    //     localStorage.getItem("resume");
    //     localStorage.getItem("articlebody");
    // }
    
    render() {
        let pageContent = queryString.parse(this.props.location.search);
        let pagemap = pageContent.action;
        let subcategorie = pageContent.subcategorie;
        console.log("article", this.state.currentArticle);
        console.log("localeStorage", localStorage.getItem("titre"));
        console.log("DATA:::", this.state.data);
        // console.log("profil aut", this.state.profil);
        // console.log("cv", this.state.profil.cv);
        // console.log("Laravel data: ", this.state.data);
        // console.log(this.state.color);
        // console.log(this.state.currentArticle.image);
        // console.log(this.state.imagePreviewUrl);
        // console.log(this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview);
        return ( 
            <div className="profilpage" >
                { (this.state.posted || this.state.error) && <Posted error={this.state.error} />}
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
                                                preview={this.state.imagePreviewUrlAvatar[0] && this.state.imagePreviewUrlAvatar[0].preview} 
                                                dz={this.dropZone}
                                                dzAvatar={this.dropZoneAvatar}
                                                dzCv={this.dropZoneCv}
                                                handlePicker={this.handlePicker}
                                                showPicker={this.state.showPicker}
                                                pickedColor={this.pickedColor}
                                                color={this.state.color}
                                                cv={this.state.profil.cv}
                                                profilChange={this.profilChange}
                                                postAuteurProfil={this.postAuteurProfil}
                                            /> :
                                        pagemap === "Mes Articles" ?
                                            <Auteurarticles /> :
                                        pagemap === "Rédiger un article" ?
                                            <Auteurrediger 
                                                getbd={this.getBody} 
                                                preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                                                dz={this.dropZone} 
                                                titreChange={this.titreChange} 
                                                imgLoaded={this.imgLoaded} 
                                                currentArticle={this.state.currentArticle}/> :
                                        pagemap === "Aperçu" ?
                                            <Auteurarticleapercu 
                                                preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                                                currentArticle={this.state.currentArticle} /> :
                                        pagemap === "Poster un article" ?
                                            <Auteurposter 
                                                preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                                                postAuteurArticle={this.postAuteurArticle}
                                                ap={ this.state.currentArticle } /> :
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

