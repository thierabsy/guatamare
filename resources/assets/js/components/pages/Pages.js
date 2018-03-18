import React, { Component } from 'react';
import Header from '../shared/Header';
import Pageheader from './Pageheader';
import Pagearticles from './Pagearticles';
import Offrespartenaires from '../homepage/Offrespartenaires';
import Boutiques from './Boutiques';

import { navbarItems } from '../data/navbar';

export default class Pages extends Component {
    constructor(props) {
        super(props)
            
        }
    render(props) {
        let bg = (color) => {
            return({
                background: 'gainsboro',
                background: '-moz-linear-gradient(90deg,'+ color +', #0000002e,' + color + '',
                background: '-webkit-linear-gradient(90deg,'+ color +', #0000002e,' + color + '',
                background: 'linear-gradient(90deg,'+ color +', #0000002e,' + color + '',
                textAlign: 'center',
                boxShadow: '0 0 5px'
            })
        };
        let bgspan = (color) => {
            return({
                background: color
            })
        };
        let page = this.props.match.params.pages;
        let hd  = navbarItems.filter(a => a.link === page)
                        .map((nb, index) => {
                            const col = nb.color;
                            return(
                                <div className="page-categorie" key={index} style={bg(col)} >
                                    <span  style={bgspan(col)}> { page.toUpperCase() } </span> 
                                </div> );
                            });
        return (
            <div>
                <Header />
                <div className="container maincontainer"> 
                    {hd}
                    <div className="text-center" >
                        {
                            page=== "boutique" ? <Boutiques /> : 
                            // page=== "videos" ? "VIDEOS" : 
                            <div>
                                <Pageheader pageCategorie={ page }  />
                                <Pagearticles pageCategorie={ page } />
                            </div>
                        }  
                    </div>
                    <Offrespartenaires />
                </div> 
            </div>
        );
    }
}

