import React, { Component } from 'react';

import { pages } from '../data/pages';
import { urlPath } from '../path';

class Pageheader extends Component {
    constructor(props) {
    super(props)
    }
    render() {
        // let pageCategorie = props.match.params.categorie;
        
        let singlepage = () => {
            let pageCategorie = (this.props.pageCategorie).toString().toLowerCase();
            return(
                pages.map((page, index) => {
                    if(page.categorie === pageCategorie){
                        return(
                            <div key={index} className="card" >
                                { page.categorie !== "videos" ? 
                                    <img src={`${ urlPath }/img/${page.topimg}`} className="card-img-top" />
                                :
                                    <div className="videowrapper">
                                            <img src={`${urlPath}/img/${page.categorie}1.jpg`} className="card-img-top" />
                                            <img src={`${urlPath}/img/video.png`} className="videooverlay" />
                                    </div>
                                }
                                <div className="card-body text">
                                    <h3 className="card-title" >{page.categorie}</h3>
                                    <p className="card-text" >{page.toparticle}</p>
                                    <a href={`/${page.categorie}`}>
                                        <button className="btn"> { page.categorie !== "videos" ? "Lire..." : "Regarder..." } </button>
                                    </a>
                                </div> 
                            </div>
                        );
                    }
                })
            );
        }
        return (
            <div>
                
                <div className="row">
                    <div className="col col-sm-12 col-md-9 pageheader">
                        {singlepage()}
                    </div>
                    <div className="col col-sm-12 col-md-3">
                    
                    </div>
                </div>
            </div>
    );
    }
}

export default Pageheader;
