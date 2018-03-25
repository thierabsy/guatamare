import React from 'react';
import { urlPath } from '../path';
import Topsticker from '../sliders/Topsticker';
import Tv from '../shared/Tv';

import { sliderarticlesgroup1 } from '../data/sliderarticlesgroup1';

let artgrp1 = sliderarticlesgroup1.map((item, i) => {
    return(
        <div key={ i } className="row horizontalarticle">
            <div className="col col-sm-12 col-md-4 img">
                <img src={`${urlPath}/img/${ item.img }`} />
            </div>
            <div className="col col-sm-12 col-md-8 text">
                <div className="categorie"><span> { item.categorie } </span></div>
                <h3> { item.titre } </h3>
                <p> { item.details } </p>
                <div className="date">
                    <i className="fas fa-clock"></i> { item.date } <i className="fas fa-edit"></i> { item.auteur } 
                </div>
            </div>
        </div>
    )
})

const Articlesgroup1 = () => {
        return (
            <div className="articlesgroup1">
                <div className="row">
                    <div className="col col-sm-12 col-md-9 left">
                        { artgrp1 }
                    </div>
                    <div className="col col-sm-12 col-md-3 right">
                        <Tv />
                    </div>
                </div>
            </div>
        );
    }

export default Articlesgroup1;
