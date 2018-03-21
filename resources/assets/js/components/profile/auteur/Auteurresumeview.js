import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';

let d = new Date();
let today = d.getDate();
let month = d.getMonth()+1;
let year = d.getFullYear();

const Auteurresumeview = ({rv,  preview}) => {
    // console.log(rv)
    return(
        <div className="resumeview">
            <h3>Résumé</h3> <span className="parties">(Image, Titre, Résumé)</span>
            <hr />
            <div className="pageheader">
                <div className="card" >
                    <img src={preview || `${urlPath}/img/economie.jpg`} className="card-img-top" />
                    <div className="card-body text">
                        <h3 className="card-title" > { rv.titre } </h3>
                        <p className="card-text" > { rv.resume } </p>
                        <Link to="?action=Poster%20un%20article" >
                            <button className="btn">Lire...</button>
                        </Link>
                    </div>
                    <div className="card-footer">
                        <span className="text-left"><i className="fas fa-edit"></i> Auteur</span>
                        <span className="text-right"><i className="fas fa-clock"></i> { today }-{ month }-{ year } </span>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Auteurresumeview;
