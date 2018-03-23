import React from 'react';
import { Link } from 'react-router-dom';
import {urlPath} from '../../path';

import { panelistes } from '../../data/panelistes';

let aut_card  = panelistes
                    .filter(a => a.id === 123)
                    .map((nb, index)=> {
                        return(
                            <div key={index} className="cardTopWrapper" onMouseMove={(e)=> console.log(e.clientX) } >
                                <div className="cardTop">
                                    {/* <img src={`${ urlPath }/img/${nb.img}`} /> */}
                                    <img src={`${ urlPath }/img/partenaire1.jpg`} />
                                    <h4> { nb.name } </h4>
                                    <p> { nb.fonction } </p>
                                    <span>
                                        <button className="btn btn-success btn-sm">Première annonce <br />{ nb.date_premier_article }</button>
                                        <button className="btn btn-warning btn-sm">Dernière annonce <br />{ nb.date_dernier_article }</button>
                                        <button className="btn btn-info btn-sm">Nombre annonces <br />{ nb.nombre_article }</button>
                                    </span>
                                    <div className="configsignup">
                                        <Link to="#" className="config" >Paramétres</Link>
                                        <Link to="#" className="signup" >Déconnecter</Link>
                                    </div>
                                </div>
                            </div>
                        );
                });

const AnnonceurCard = () => {
        return (
            <div className="auteurcard">
                { aut_card }
            </div>
        );
    }

export default AnnonceurCard;
