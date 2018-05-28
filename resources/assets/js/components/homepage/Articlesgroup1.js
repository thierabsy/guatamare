import React from 'react';
import { urlPath } from '../path';
import Topsticker from '../sliders/Topsticker';
import Tv from '../shared/Tv';

import { sliderarticlesgroup1 } from '../data/sliderarticlesgroup1';
import { Link } from 'react-router-dom';

// let artgrp1 = sliderarticlesgroup1.map((item, i) => {
//     return(
//         <div key={ i } className="row horizontalarticle">
//             <div className="col col-sm-12 col-md-4 img">
//                 <img src={`${urlPath}/storage/auteur/${item.image}`} />
//             </div>
//             <div className="col col-sm-12 col-md-8 text">
//                 <div className="categorie"><span> { item.categorie } </span></div>
//                 <h3> { item.titre } </h3>
//                 <p> { item.details } </p>
//                 <div className="date">
//                     <i className="fas fa-clock"></i> { item.date } <i className="fas fa-edit"></i> { item.auteur } 
//                 </div>
//             </div>
//         </div>
//     )
// })

let Artgrp1 = ({dataActive}) => dataActive ? dataActive.filter(a => a.slider === "sl_top2").map((item, index) => {
    // let dataActive = this.props.data
    let link2 = item.titre.split(" ").join("-").toLowerCase();
    return <div key={ index } className="row horizontalarticle">
                <div className="col col-sm-12 col-md-4 img">
                    <img src={`${urlPath}/storage/auteur/${item.image}`} />
                </div>
                <div className="col col-sm-12 col-md-8 text">
                    <div className="categorie"  style={{textTransform: "uppercase"}}><span> { item.categorie } </span></div>
                     <Link to={ `${urlPath}/categorie/${ item.categorie }/${link2}-${page.id}`} style={{color: "inherit"}} ><h4> { item.titre } </h4> </Link>
                    <p style={{maxHeight: "70px", overflow: "hidden"}} > { item.resume } </p>
                    <div className="date">
                        {/* <i className="fas fa-clock"></i> { item.date } <i className="fas fa-edit"></i> { item.auteur }  */}
                        <i className="fas fa-clock"></i> 2018-05-27 <i className="fas fa-edit"></i> Auteur 
                    </div>
                </div>
            </div>}) : <div></div>

const Articlesgroup1 = ({data}) => {
        return (
            <div className="articlesgroup1">
                <div className="row">
                    <div className="col col-sm-12 col-md-9 left">
                        <Artgrp1 dataActive={data} />
                    </div>
                    <div className="col col-sm-12 col-md-3 right">
                        <Tv />
                    </div>
                </div>
            </div>
        );
    }

export default Articlesgroup1;
