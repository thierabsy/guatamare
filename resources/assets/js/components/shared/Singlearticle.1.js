import React, { Component } from 'react';
import Slider from 'react-slick';

import { articles } from '../data/articles';
import Convertisseurdevise from '../shared/Convertisseurdevise';

class Singlearticle extends Component {
    constructor(props) {
        super(props)
            this.next = this.next.bind(this)
            this.previous = this.previous.bind(this)
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
        // let pageCategorie = (this.props.pageCategorie).toString().toLowerCase();
        // let pageCategorie = this.props.match.params.article;
        // console.log(pageCategorie);
        let article = this.props.match.params.article;
        console.log(article)
        let singlearticlecontent = () => {
            return(
                articles.filter(a => {
                        let x = a.title.split(" ").join("-").toLowerCase();
                        console.log(x);
                        return x === article})
                    .map((page, index) => {
                        // if(page.categorie === pageCategorie){
                            
                            return(
                                <div key={index} className="card" >
                                    <img src={`../../img/${page.categorie}${index+1}.jpg`} className="card-img-top" />
                                    <div className="card-body text">
                                        <h3 className="card-title" >{page.categorie} {index+1} </h3>
                                        <p className="card-text" >{page.fullarticle}</p>
                                    </div>
                                    
                                    <div className="card-footer">
                                        <span className="text-left"><i className="fas fa-edit"></i> Auteur</span>
                                        <span className="text-right"><i className="fas fa-clock"></i> 04-04-2018</span>
                                    </div> 
                                </div>
                            );
                        // }
                })
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-9 singlearticle">
                        {/* <Grid className="card-columns"> */}
                        <div className="articlesgrid">
                            {singlearticlecontent()}
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-3 right sidebarslider">
                        <Convertisseurdevise />
                        {/*************** SIDEBARSLIDER *******************/}
                        <div className="sbslider">
                            <div className="psheader">
                                <h5><span>PARTENAIRES</span> </h5>
                            </div> 
                            <Slider ref={sbs => this.slider = sbs } {...settings} className="sliderwrapper" >
                                <div className="ong">
                                <div className="pwrapper"> 
                                    <a href="#">
                                    <img src="img/ong1.png" />
                                    </a>
                                    </div>
                                </div>
                                <div className="ong">
                                <div className="pwrapper"> 
                                    <a href="#">
                                    <img src="img/ong2.png" />
                                    </a>
                                    </div>
                                </div>
                                <div className="ong">
                                <div className="pwrapper">
                                    <a href="#">
                                    <img src="img/ong3.jpg" />
                                    </a>
                                    </div>
                                </div>
                                <div className="ong">
                                    <div className="pwrapper">
                                        <a href="#">
                                            <img src="img/ong4.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="ong">
                                <div className="pwrapper">
                                    <a href="#">
                                    <img src="img/ong5.jpg" />
                                    </a>
                                    </div>
                                </div>
                            </Slider>
                            <div className="prevnext" >
                                <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                                <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                            </div> 
                        </div>

                        {/*************** SIDEBARSLIDER *******************/}
                    </div>
                </div>
            </div>
    );
    }
}

export default Singlearticle;
