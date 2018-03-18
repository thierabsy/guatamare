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

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {}
        }
    }
   
    componentDidMount(){
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
                                <AdminNav type={type} />
                            </div>
                            <div className="col col-sm-12 col-md-9">
                                <div className="auteurright">
                                    <h3 className="text-center lead">{ type ? type.toUpperCase()  : "BIENVENUE" }</h3>
                                    <hr />
                                    <AdminSubnav tp={type} subcat={subcategorie} />
                                    <hr />
                                   <AdminPages type={type} subcategorie={subcategorie} />
                                   
                                    
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

