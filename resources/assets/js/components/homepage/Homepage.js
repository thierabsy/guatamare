import React, { Component } from 'react';
import axios from 'axios';

import Header from '../shared/Header';
import Mainslider from '../sliders/Mainslider';
import Articles from './Articles';
import Newsletter from './Newsletter';
import Toparticles from './Toparticles';
import Offrespartenaires from './Offrespartenaires';
import Nospartenaires from './Nospartenaires';
import { urlPath } from '../path';

export default class Homepage extends Component {
    constructor(){
        super();
        this.state= {
            db: [],
            articles: [],
            annonces: [],
            magazines: [],
            sante: [],
        }
    }
    componentDidMount(){
        let url = urlPath+'/api/data/index'
        axios.get(url)
             .then( res => {
                 this.setState({
                    db: res.data,
                    articles: res.data.articles,
                    annonces: res.data.annonces,
                    magazines: res.data.magazines
                 })
             })
             .then(()=> console.log(this.state.db))
    }

    render() {
        let artEco = Object.keys(this.state.db).length !== 0 && this.state.db.articles.filter(a => a.categorie === "economie") ;
        console.log("Eco", artEco || '')
        console.log("DATA", this.state.db || '')
        console.log("ART", this.state.db.articles || '')
        console.log("ANN", this.state.db.annonces || '')
        console.log("MAG", this.state.db.magazines || '')
        console.log("SANTE", this.state.db.sante || '')
        return (
            <div className="">
                <Header />
                <div className="container maincontainer"> 
                    <Mainslider 
                        data = {this.state.articles}
                    />
                    <Articles 
                        data = {this.state.articles}
                    />
                    <Toparticles 
                        data = {this.state.articles}
                    />
                    <Offrespartenaires path={""} />
                    <Newsletter />
                    <Nospartenaires />
                </div>
            </div>
        );
    }
}

