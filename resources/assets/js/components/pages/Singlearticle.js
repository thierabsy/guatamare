import React, { Component } from 'react';
import Slider from 'react-slick';

import Header from '../shared/Header';
import { articles } from '../data/articles';
import Newsletter from '../homepage/Newsletter';
import Offrespartenaires from '../homepage/Offrespartenaires';
import Singlearticleslider from './Singlearticleslider';
import Convertisseurdevise from '../shared/Convertisseurdevise';
import Sidebarslider from '../sliders/Sidebarslider';
import Sidebarad1 from '../ads/Sidebarad1';
import { urlPath } from '../path';

import renderHTML from 'react-render-html';

class Singlearticle extends Component {
    constructor(props) {
        super(props)
            this.next = this.next.bind(this)
            this.previous = this.previous.bind(this)
            this.state= {
                articles: []
            }
        }
        componentDidMount(){
            let $this = this;
            axios.get("/api/data/index").then(res => {
            $this.setState({
                    articles: res.data.articles
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
        let pageCategorie = this.props.match.params.pages;
        let article = this.props.match.params.article;
        let singlearticlecontent = () => {
            return(
                    this.state.articles &&  this.state.articles.filter(a => {
                        let x = a.titre.split(" ").join("-").toLowerCase()+"-"+a.id;
                        return x === article && a.categorie === pageCategorie})
                    .map((page, index) => {
                            return(
                                <div key={index} className="articleContent" >
                                    <h3 className="title" >{page.titre}</h3>
                                    <div className="articleauteur">
                                        <span className="span1"><i className="fas fa-edit"></i> Auteur</span> {'  '}
                                        <span className="span2"><i className="fas fa-clock"></i> 2018-04-27</span>
                                    </div>
                                    <img src={`${ urlPath }/storage/auteur/${page.image}`} className="mainImage" />
                                    <div className="text">
                                        <div className="articlebody" >{ renderHTML(page.articlebody)}</div>
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
                            <div className="articlesgrid">
                                {singlearticlecontent()}
                            </div>

                            <Singlearticleslider pageCategorie={pageCategorie} article={this.state.article} articles={this.state.articles}/>

                        </div>
                        <div className="col col-sm-12 col-md-3 right sidebarslider">
                            <Sidebarad1 />
                            <Convertisseurdevise />
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
