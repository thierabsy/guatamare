import React from 'react';
import { Link } from 'react-router-dom';
import {urlPath} from '../../path';

import { articles } from '../../data/articles';

let aut_card  = articles
                    .filter(a => a.categorie === "economie")
                    .map((page, index)=> {
                        return(
                        <div key={index} className="card" >
                            <img src={`${urlPath}/img/${page.categorie}${index+1}.jpg`} className="card-img-top" />
                            <div className="card-body text">
                                <h3 className="card-title" >{page.categorie} {index+1} </h3>
                                <p className="card-text" >{page.toparticle}</p>
                                <Link to={`/categorie/${page.categorie}/`} >
                                    <button className="btn">Lire...</button>
                                </Link>
                            </div>
                            <div className="card-footer">
                                <span className="text-left"><i className="fas fa-edit"></i> Auteur</span>
                                <span className="text-right"><i className="fas fa-clock"></i> 04-04-2018</span>
                            </div> 
                        </div>
                    );
                });

const Auteurarticles = () => {
        return (
            <div className="auteurarticles">
                <div className="pageheader">
                    { aut_card }
                </div>
            </div>
        );
    }

export default Auteurarticles;
