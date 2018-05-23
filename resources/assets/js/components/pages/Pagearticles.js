import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../path';
import Slider from 'react-slick';

import { articles } from '../data/articles';
import Convertisseurdevise from '../shared/Convertisseurdevise';
import Sidebarslider from '../sliders/Sidebarslider';
// import Sidebarslider from '../sliders/Sidebarslider';

class Pagearticles extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state= {
            data: []
        }
    }
    componentDidMount(){
        let $this = this;
        axios.get("/api/data/auteur").then(res => {
        $this.setState({
                data: res.data
            })
        })
    }
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }
    render() {
        let settings = {
            infinite: true,
            speed: 3000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true
        };
        // let pageCategorie = props.match.params.categorie;
        // let pageCategorie = "economie";
        console.log("DATA", this.state.data);
        let pageCategorie = (this.props.pageCategorie).toString().toLowerCase();
        let singlearticle = () => {
            return(
                // articles.filter(a => a.categorie === pageCategorie)
                this.state.data.filter(a => a.categorie === pageCategorie)
                    .map((page, index) => {
                        // if(page.categorie === pageCategorie){
                            // let link2 = page.title.split(" ").join("-").toLowerCase();
                            let link2 = page.titre.split(" ").join("-").toLowerCase();
                            console.log(link2)
                            return(
                                page.categorie !== "videos" ?
                                    <div key={index} className="card" >
                                        {/* <img src={`${urlPath}/img/${page.categorie}${index+1}.jpg`} className="card-img-top" /> */}
                                        <img src={`${urlPath}/storage/auteur/${page.image}`} className="card-img-top" />
                                        <div className="card-body text">
                                            <h3 className="card-title" >{page.categorie} {index+1} </h3>
                                            {/* <p className="card-text" >{page.toparticle}</p> */}
                                            <p className="card-text" >{page.titre}</p>
                                            {/* <Link to={`/categorie/${page.categorie}/${link2}`} > */}
                                            <Link to={`/categorie/${page.categorie}/${link2}`} >
                                                <button className="btn">Lire...</button>
                                            </Link>
                                        </div>
                                        <div className="card-footer">
                                            <span className="text-left"><i className="fas fa-edit"></i> Auteur</span>
                                            <span className="text-right"><i className="fas fa-clock"></i> 04-04-2018</span>
                                        </div> 
                                    </div> 
                                : 
                                    <div key={index} className="card" >
                                        <div className="videowrapper">
                                            <img src={`${urlPath}/img/${page.categorie}${index+1}.jpg`} className="card-img-top" />
                                            <Link to={`/categorie/${page.categorie}/${link2}`} >
                                                <img src={`${urlPath}/img/video.png`} className="videooverlay" />
                                            </Link>
                                        </div>
                                        <div className="card-body text">
                                            <h3 className="card-title" >{page.categorie} {index+1} </h3>
                                            <Link to={`/categorie/${page.categorie}/${link2}`} >
                                                <button className="btn">Regarder...</button>
                                            </Link>
                                        </div>
                                    </div>
                            );
                        // }
                })
            );
        }
        return (
            <div>
                <div className="row">
                    <div className="col col-sm-12 col-md-9 pagearticles">
                        {/* <Grid className="card-columns"> */}
                        <div className="articlesgrid">
                            {singlearticle()}
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-3 right sidebarslider">
                        <Convertisseurdevise />
                        {/*************** SIDEBARSLIDER *******************/}
                        <Sidebarslider />

                        {/*************** SIDEBARSLIDER *******************/}
                    </div>
                </div>
            </div>
    );
    }
}

export default Pagearticles;
