import React, { Component } from 'react';
import Slider from 'react-slick';
import { toparticles } from '../data/toparticles';
import { urlPath } from '../path';
import Sidebarslider from '../sliders/Sidebarslider';
import Sidebarad2 from '../ads/Sidebarad2';
// import Sidebarslider from '../sliders/Sidebarslider';

let Singlearticle = ({dataActive}) => dataActive ? dataActive.filter(a => a.slider === "sl_topArticles").map((item, index) => {
            let link2 = page.titre.split(" ").join("-").toLowerCase();
            return(
                <div key={index}>
                    <div className="verticalarticle">
                        <img src={`${urlPath}/storage/auteur/${item.image}`} />
                        <div className="text">
                            <div className="categorie"><span> {item.categorie} </span></div>
                            <div  className="innerText">
                                <a href={ `${urlPath}/categorie/${ item.categorie }/${link2}-${page.id}`}>
                                    <h4 className="" >{item.titre}</h4>
                                    <p>{item.resume}</p> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }): <div></div>
    
const Toparticles = ({data})=> {
    
        return (
            <div className="toparticles">
            <div className="row">
                <div className="col col-sm-12 col-md-9">
                    <div className="taheader">
                        <div className="span"><span>TOP ARTICLES</span></div>
                        <div className="line"></div>
                    </div>
                    <div className="left">
                        <Singlearticle dataActive={data} />
                    </div>
                </div>
                <div className="col col-sm-12 col-md-3 right sidebarslider">
                    <Sidebarslider />
                    <Sidebarad2 />
                </div>
            </div>
        </div>
    );
    }

export default Toparticles;
