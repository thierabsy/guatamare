import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import moment from "moment";

import AnnonceurCard from './publicite/AnnonceurCard';
import Auteuralertes from './auteur/Auteuralertes';
import Annonceurprofil from './publicite/Annonceurprofil';
import AnnonceurNav from './publicite/AnnonceurNav';
import AnnonceurPub from './publicite/AnnonceurPub';
import AnnonceurKiosque from './publicite/AnnonceurKiosque';
import { urlPath } from '../path';
import Topheader from './Topheader'; 
import Smiler from './Smiler';
import AnnonceurBoutique from './publicite/AnnonceurBoutique';
import Outils from './outils/Outils';
import Posted from './Posted';

export default class Publicite extends Component {
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
            color: "rgba(255,255,255,1)",
            data: [],
            magazine: {
                nom: "...",
                user_id: "K015",
                image: "",
                editeur: "...",
                periode_start: "",
                periode_end: "",
                alttext: "",
                siteweb: "",
                prix: 0,
            },
            dates: {
                start_date: moment(),
                end_date: moment().add(1, "month")
            },
            boutique: {
                nom: "",
                user_id: "A007",
                adresse: "",
                email: "",
                telephone: "",
                ville: "",
                image1: "",
                image2: "",
                image3: "",
                produits: "",

            },
            profil: {
                nom: "",
                email: "",
                user_id: "pub123",
                pays: "",
                secteur: "",
                description: "",
                logo: "",
                color: "",
                linkedin: "",
                facebook: "",
                twitter: "",
                catalogue: "",

            },
            annonce: {
                user_id: "A123",
                type: "",
                img: "",
                alttext: "",
                status: "",
                siteweb: ""
            },
            imagePreviewUrl: [],
            imagePreviewUrlBanner: [],
            imagePreviewUrlCote: [],
            imagePreviewUrlCover: [],
            imagePreviewUrlMag: [],
            imagePreviewUrlBtk1: [],
            imagePreviewUrlBtk2: [],
            imagePreviewUrlBtk3: [],
            cover: false,
            apercuAnnonce: false,
            posted: false
        }
        this.annonceChange = this.annonceChange.bind(this);
        this.profilChange = this.profilChange.bind(this);
        this.titreChange = this.titreChange.bind(this);
        this.boutiqueChange = this.boutiqueChange.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.getBody = this.getBody.bind(this);
        this.dropZone = this.dropZone.bind(this);
        this.dropZoneBanner = this.dropZoneBanner.bind(this);
        this.dropZoneCote = this.dropZoneCote.bind(this);
        this.dropZoneCover = this.dropZoneCover.bind(this);
        this.dropZoneMag = this.dropZoneMag.bind(this);
        this.dropZoneBtk1 = this.dropZoneBtk1.bind(this);
        this.dzBtk1 = this.dzBtk1.bind(this);
        this.dropZoneBtk2 = this.dropZoneBtk2.bind(this);
        this.dzBtk2 = this.dzBtk2.bind(this);
        this.dropZoneBtk3 = this.dropZoneBtk3.bind(this);
        this.dzBtk3 = this.dzBtk3.bind(this);
        this.handlePicker = this.handlePicker.bind(this);
        this.pickedColor = this.pickedColor.bind(this);
        this.dateDebut = this.dateDebut.bind(this);
        this.dateDebutt = this.dateDebutt.bind(this);
        this.dateFin = this.dateFin.bind(this);
        this.dateFinn = this.dateFinn.bind(this);

        this.showAnnonce = this.showAnnonce.bind(this);

        this.postPubProfil = this.postPubProfil.bind(this);
        this.postPubAnnonce = this.postPubAnnonce.bind(this);
        this.postPubMagazine = this.postPubMagazine.bind(this);
        this.postPubBoutique = this.postPubBoutique.bind(this);
        
        this.getpub = this.getpub.bind(this);
    }
    componentDidMount(){
        this.getpub()
    }
    getpub(){
        let url = urlPath+"/api/data/publicite/getpub";
        let self = this;
        axios.get(url)
             .then(res => {
                self.setState({
                    data: res.data.pub
            })
        })
    }
    profilChange(e){
        this.setState({
            profil: { 
                ...this.state.profil,
                [e.target.name]: e.target.value,
                logo: this.state.imagePreviewUrl[0],
                catalogue: catalogue.files[0]
            }
        })
    }
    annonceChange(e){
        this.setState({
            annonce: { 
                ...this.state.annonce,
                [e.target.name]: e.target.value
            }
        })
    }
    titreChange(e){
        this.setState({
            magazine: { 
                ...this.state.magazine,
                [e.target.name]: e.target.value
            }
        })
    }
    boutiqueChange(e){
        this.setState({
            boutique: { 
                ...this.state.boutique,
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
           profil: { 
                ...this.state.profil,
                logo: files[0]
            }
       })
   }
   dropZoneBanner(files){
       this.setState({
           imagePreviewUrlBanner: files,
           annonce: { 
                ...this.state.annonce,
                img: files[0],
                type: queryString.parse(this.props.location.search).subcategorie
            }
       })
   }
   dropZoneCote(files){
       this.setState({
           imagePreviewUrlCote: files,
           annonce: { 
                ...this.state.annonce,
                img: files[0],
                type: queryString.parse(this.props.location.search).subcategorie
            }
       })
   }
   dropZoneCover(files){
       this.setState({
           imagePreviewUrlCover: files,
           cover: true,
           annonce: { 
                ...this.state.annonce,
                img: files[0],
                type: queryString.parse(this.props.location.search).subcategorie
            }
       })
   }
   dropZoneMag(files){
        this.setState({
           imagePreviewUrlMag: files,
           magazine: { 
                ...this.state.magazine,
                image: files[0]
           }
       })
   }
   dropZoneBtk1(files){
       this.setState({
           imagePreviewUrlBtk1: files
       }),
       setTimeout(this.dzBtk1, 1)
   }
   dzBtk1(){
        this.setState({
            boutique: {
                ...this.state.boutique,
                image1: this.state.imagePreviewUrlBtk1[0]
            }
        })
   }
   dropZoneBtk2(files){
       this.setState({
           imagePreviewUrlBtk2: files
       }),
       setTimeout(this.dzBtk2, 1)
   }
   dzBtk2(){
        this.setState({
            boutique: {
                ...this.state.boutique,
                image2: this.state.imagePreviewUrlBtk2[0]
            }
        })
   }
   dropZoneBtk3(files){
       this.setState({
           imagePreviewUrlBtk3: files
       }),
       setTimeout(this.dzBtk3, 1)
   }
   dzBtk3(){
        this.setState({
            boutique: {
                ...this.state.boutique,
                image3: this.state.imagePreviewUrlBtk3[0]
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
            boutique: {
                ...this.state.boutique,
                color: color.hex
            }, 
            profil: {
                ...this.state.profil,
                color: color.hex
            } 
        })
    }
    dateDebut(date){
        this.setState({
            dates: {
                ...this.state.dates,
                start_date: date
            }
        }),
       setTimeout(()=>  this.dateDebutt(), 1)
    }
    dateDebutt(){
        this.setState({
            magazine: { 
                ...this.state.magazine,
                periode_start: moment(this.state.dates.start_date).format("YYYY-MM-DD")
            }
        })
    }
    // periode_start: document.getElementById("start_id").value

    dateFin(date){
        this.setState({
            dates: {
                ...this.state.dates,
                end_date: date
            }
        }),
        setTimeout(()=>  this.dateFinn(), 1)
    }
    dateFinn(){
        this.setState({
            magazine: { 
                ...this.state.magazine,
                periode_end: moment(this.state.dates.end_date).format("YYYY-MM-DD")
            }
        })
    }
    showAnnonce(){
        this.setState({
            apercuAnnonce: !this.state.apercuAnnonce
        })
    }
    postPubProfil(){
        let data = new FormData();
        for(let key in this.state.profil){
            data.append(key , this.state.profil[key]);
        }
        let url= urlPath+"/api/data/publicite/profil";
        axios.post(url, data)
            .then(function(res){
                self.setState({
                    posted: true
                })
                setTimeout(() => {
                    self.setState({
                        posted: false
                    })
                }, 5000)
            })
    }
    postPubAnnonce(){
        let data = new FormData();
        for(let key in this.state.annonce){
            data.append(key , this.state.annonce[key]);
        }
        let url= urlPath+"/api/data/publicite/annonce";
        let self = this;
        axios.post(url, data)
            .then(function(res){
                self.setState({
                    posted: true,
                    annonce: {
                        ...self.state.annonce,
                        img: "",
                        siteweb: "",
                        alttext: "",
                    }
                })
                setTimeout(() => {
                    self.setState({
                        posted: false
                    })
                }, 5000)
            })
    }
    postPubMagazine(e){
        e.preventDefault();
        let data = new FormData();
        for(let key in this.state.magazine){
            data.append(key , this.state.magazine[key]);
        }
        let url= urlPath+"/api/data/publicite/magazine";
        let self = this;
        axios.post(url, data)
            .then(function(res){
                self.setState({
                    posted: true
                })
                setTimeout(() => {
                    self.setState({
                        posted: false
                    })
                }, 5000)
            })
    }
    postPubBoutique(e){
        e.preventDefault();
        let data = new FormData();
        for(let key in this.state.boutique){
            data.append(key , this.state.boutique[key]);
        }
        let url= urlPath+"/api/data/publicite/boutique";
        let self = this;
        axios.post(url, data)
            .then(function(res){
                self.setState({
                    posted: true
                })
                setTimeout(() => {
                    self.setState({
                        posted: false
                    })
                }, 5000)
            })
    }
    
    render() {
        let pageContent = queryString.parse(this.props.location.search);
        let pagemap = pageContent.action;
        let subcategorie = pageContent.subcategorie;
        // console.log("boutique", this.state.boutique);
        console.log("getpub", this.state.data);
        // console.log("img", this.state.annonce.img || this.state.annonce.img.preview )
        // console.log(moment.duration(this.state.dates.end_date.diff(this.state.dates.start_date), 'weeks'))
        let coverStyle = subcategorie === "Couverture" && {
            backgroundImage: `url(${this.state.imagePreviewUrlCover[0] && this.state.imagePreviewUrlCover[0].preview })` ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "fixed",
            paddingTop: "120px"
        }
        return (
            <div className="profilpage" >
                {/* <Posted /> */}
                { this.state.posted && <Posted action={pagemap} /> }
                <div className="profilheader profil hpublicite">
                   <div className="overlayer">
                        <div className="container">
                            <Topheader />
                            <AnnonceurCard />
                        </div>
                   </div>
                </div>
                <div className="profilbody" style={coverStyle || {}} >
                   <div className="container maincontainer">
                        <div className="row">
                            <div className="col col-sm-12 col-md-3">
                                <AnnonceurNav 
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
                                            <Annonceurprofil
                                                preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                                                dz={this.dropZone} 
                                                handlePicker={this.handlePicker}
                                                showPicker={this.state.showPicker}
                                                pickedColor={this.pickedColor}
                                                postPubProfil={this.postPubProfil}
                                                profilChange={this.profilChange}
                                                color={this.state.color}
                                            /> :
                                        pagemap === "Pubs" ?
                                            <AnnonceurPub 
                                                dz={this.dropZone} 
                                                dzbanner={this.dropZoneBanner} 
                                                dzcote={this.dropZoneCote} 
                                                dzcover={this.dropZoneCover} 
                                                annonceChange={this.annonceChange} 
                                                previewBanner={this.state.imagePreviewUrlBanner[0] && this.state.imagePreviewUrlBanner[0].preview} 
                                                previewCote={this.state.imagePreviewUrlCote[0] && this.state.imagePreviewUrlCote[0].preview} 
                                                previewCover={this.state.imagePreviewUrlCover[0] && this.state.imagePreviewUrlCover[0].preview} 
                                                handlePicker={this.handlePicker}
                                                showPicker={this.state.showPicker}
                                                annonce={this.state.annonce}
                                                showAnnonce={this.showAnnonce}
                                                pickedColor={this.pickedColor}
                                                postPubAnnonce={this.postPubAnnonce}
                                                color={this.state.color}
                                                apercuAnnonce={this.state.apercuAnnonce}
                                                subcategorie={subcategorie}
                                                page={pagemap}
                                            /> :
                                        pagemap === "Magazine" ?
                                            <AnnonceurKiosque
                                                previewK={this.state.imagePreviewUrlMag[0] && this.state.imagePreviewUrlMag[0].preview} 
                                                dz={this.dropZoneMag} 
                                                color={this.state.color}
                                                mag={this.state.magazine}
                                                titreChange={this.titreChange}
                                                dateDebut={this.dateDebut}
                                                dateFin={this.dateFin}
                                                date={this.state.dates}
                                                postPubMagazine={this.postPubMagazine}
                                            /> :
                                        pagemap === "Boutique" ?
                                            <AnnonceurBoutique
                                                previewBtk1={this.state.imagePreviewUrlBtk1[0] && this.state.imagePreviewUrlBtk1[0].preview} 
                                                previewBtk2={this.state.imagePreviewUrlBtk2[0] && this.state.imagePreviewUrlBtk2[0].preview} 
                                                previewBtk3={this.state.imagePreviewUrlBtk3[0] && this.state.imagePreviewUrlBtk3[0].preview} 
                                                dz1={this.dropZoneBtk1} 
                                                dz2={this.dropZoneBtk2} 
                                                dz3={this.dropZoneBtk3} 
                                                btk={this.state.boutique}
                                                boutiqueChange={this.boutiqueChange}
                                                postPubBoutique={this.postPubBoutique}
                                                subcat={subcategorie}
                                                tp={pagemap}
                                            /> :
                                        pagemap === "Outils" ?
                                            <Outils 
                                                subcategorie={subcategorie}
                                                page={pagemap}
                                                actiontype={"action"} 
                                            /> :
                                        pagemap === "Messages" ?
                                            <Smiler>
                                                <i className="fab fa-grav smileicon si2" />
                                                <h5> En développement!!!</h5>
                                            </Smiler>
                                            :
                                            <Smiler>
                                                <i className="fas fa-smile smileicon si1" />
                                                <i className="fas fa-smile smileicon si2" />
                                                <i className="fas fa-smile smileicon si3" />
                                            </Smiler>
                                            // <Auteuralertes />
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

