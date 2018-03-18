import React, { Component } from 'react';
import Slider from 'react-slick';

import Header from '../shared/Header';
import { articles } from '../data/articles';
import Newsletter from '../homepage/Newsletter';
import Offrespartenaires from '../homepage/Offrespartenaires';
import Singlearticleslider from './Singlearticleslider';
import Convertisseurdevise from '../shared/Convertisseurdevise';
import Sidebarslider from '../sliders/Sidebarslider';
import { urlPath } from '../path';

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
        let pageCategorie = this.props.match.params.pages;
        // console.log(pageCategorie);
        let article = this.props.match.params.article;
        // console.log(article);
        let singlearticlecontent = () => {
            return(
                articles.filter(a => {
                        let x = a.title.split(" ").join("-").toLowerCase();
                        // console.log(x, 1);
                        return x === article && a.categorie === pageCategorie})
                    .map((page, index) => {
                            return(
                                <div key={index} className="articleContent" >
                                    <h3 className="title" >{page.title} {index+1} </h3>
                                    <div className="articleauteur">
                                        <span className="span1"><i className="fas fa-edit"></i> Auteur</span>
                                        <span className="span2"><i className="fas fa-clock"></i> 04-04-2018</span>
                                    </div>
                                    <img src={`${ urlPath }/img/${page.categorie}${index+1}.jpg`} className="" />
                                    <div className="text">
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                        <p className="articlebody" >{page.fullarticle}</p>
                                    </div>
                                    <div className="articlefooter">
                                        <h4>Dr Mocoudou FAYE</h4>
                                        <p>Professeur Université Numérique....</p>
                                    </div> 
                                </div>
                            );
                })
            );
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-9 singlearticle">
                            {/* <Grid className="card-columns"> */}
                            <div className="articlesgrid">
                                {singlearticlecontent()}
                            </div>

                            <Singlearticleslider pageCategorie={pageCategorie} article={article} />

                        </div>
                        <div className="col col-sm-12 col-md-3 right sidebarslider">
                            <Convertisseurdevise />
                            {/*************** SIDEBARSLIDER *******************/}
                            
                            <Sidebarslider />

                            {/*************** SIDEBARSLIDER *******************/}
                        </div>
                    </div>
                    <Newsletter />
                    <Offrespartenaires />

                </div>
            </div>
    );
    }
}

export default Singlearticle;
