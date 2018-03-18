import React, {Component} from 'react';
import { urlPath } from '../path';
import Header from '../shared/Header';

import groupBy from 'lodash/groupBy';

import { kiosques } from "../data/kiosques";

class Kiosque extends Component {
    constructor(props){
        super(props)

    }
    render(){
        
        let singlemagazine = () => {
            return(
                kiosques.map((mag, index) => {
                    return(
                        <div className="col col-md-4 col-sm-6 mag" key={index} >
                            <div className="maginnerwrapper">
                                <h4 className="magTitle"><i className={`fas fa-bookmark ${mag.periode.toLowerCase()}`}></i> {mag.magazine}</h4>
                                <div className="imgwrapper">
                                    <img src={`${urlPath}/img/${mag.img}.jpg`} />
                                    <span className={ mag.periode === "MOIS" ? "mois" : "hebdo"} >Prix: 1200 FCFA</span>
                                </div>
                                <span></span>
                                <div className="magText">
                                    <div className="details"><span className="span1">Editeur</span>  <span className="span2">{mag.editeur}</span></div>
                                    <div className="details"><span className="span1">Période</span> <span className="span2">@ {mag.date_sortie}<br/>@ {mag.date_next}</span></div>
                                    <div className="details"><span className="span1">Détails</span><a href={mag.link} target="_blank"><span className="span2">Info <i className="fas fa-info-circle"></i> </span></a> </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
  return (  <div>
                <Header />
                <div className="container maincontainer">
                    <div className="magazines">
                        <div className="text-center"> 
                            <div className="textHeader">
                                <i className="fas fa-newspaper"></i>
                                <h4><span>Kiosque & Presse</span></h4>
                                <span><i className="fas fa-bookmark mois"></i> Mensuel</span> <span><i className="fas fa-bookmark hebdo"></i> Hebdomadaire</span>
                            </div> 
                        </div>
                        <div className="row kiosqueswrapper">
                            { singlemagazine()}
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }
}

export default Kiosque;
