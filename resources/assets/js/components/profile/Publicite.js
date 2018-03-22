import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

import AnnonceurCard from './publicite/AnnonceurCard';
import Auteuralertes from './auteur/Auteuralertes';
import Annonceurprofil from './publicite/Annonceurprofil';
import AnnonceurNav from './publicite/AnnonceurNav';
import AnnonceurPub from './publicite/AnnonceurPub';
import AnnonceurKiosque from './publicite/AnnonceurKiosque';
import { urlPath } from '../path';
import Topheader from './Topheader';

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
            imagePreviewUrl: [],
            imagePreviewUrlBanner: [],
            imagePreviewUrlCote: [],
            imagePreviewUrlCover: [],
            imagePreviewUrlMag: [],
            cover: false,
            color: "rgba(255,255,255,1)",
            data: []
        }
        this.titreChange = this.titreChange.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.getBody = this.getBody.bind(this);
        this.dropZone = this.dropZone.bind(this);
        this.dropZoneBanner = this.dropZoneBanner.bind(this);
        this.dropZoneCote = this.dropZoneCote.bind(this);
        this.dropZoneCover = this.dropZoneCover.bind(this);
        this.dropZoneMag = this.dropZoneMag.bind(this);
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
   dropZoneBanner(files){
       this.setState({
           imagePreviewUrlBanner: files
       })
   }
   dropZoneCote(files){
       this.setState({
           imagePreviewUrlCote: files
       })
   }
   dropZoneCover(files){
       this.setState({
           imagePreviewUrlCover: files,
           cover: true
       })
   }
   dropZoneMag(files){
       this.setState({
           imagePreviewUrlMag: files
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
        let hours = new Date().getHours();
        console.log(hours)
        let coverStyle = subcategorie === "Couverture" && {
            backgroundImage: `url(${this.state.imagePreviewUrlCover[0] && this.state.imagePreviewUrlCover[0].preview })` ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "fixed",
            paddingTop: "120px"
        }
        return (
            <div className="profilpage" >
                <div className="profilheader profil">
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
                                <AnnonceurNav activepage={pagemap} />
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
                                                color={this.state.color}
                                            /> :
                                        pagemap === "Pubs" ?
                                            <AnnonceurPub 
                                                dz={this.dropZone} 
                                                dzbanner={this.dropZoneBanner} 
                                                dzcote={this.dropZoneCote} 
                                                dzcover={this.dropZoneCover} 
                                                previewBanner={this.state.imagePreviewUrlBanner[0] && this.state.imagePreviewUrlBanner[0].preview} 
                                                previewCote={this.state.imagePreviewUrlCote[0] && this.state.imagePreviewUrlCote[0].preview} 
                                                previewCover={this.state.imagePreviewUrlCover[0] && this.state.imagePreviewUrlCover[0].preview} 
                                                handlePicker={this.handlePicker}
                                                showPicker={this.state.showPicker}
                                                pickedColor={this.pickedColor}
                                                color={this.state.color}
                                                subcategorie={subcategorie}
                                                page={pagemap}
                                            /> :
                                        pagemap === "Magazine" ?
                                            <AnnonceurKiosque
                                                previewK={this.state.imagePreviewUrlMag[0] && this.state.imagePreviewUrlMag[0].preview} 
                                                dz={this.dropZoneMag} 
                                                color={this.state.color}
                                            /> :
                                            <div className="smile">
                                                <i className="fas fa-smile smileicon si1" />
                                                <i className="fas fa-smile smileicon si2" />
                                                <i className="fas fa-smile smileicon si3" />
                                                <span className="bb" > { hours < 13 && hours > 6  ? 
                                                                                "Bonjour" :
                                                                         hours < 20 && hours >= 13  ? 
                                                                                "Bon après-midi"
                                                                            : 
                                                                                "Bonsoir" 
                                                                        } 
                                                </span>
                                            </div>
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

