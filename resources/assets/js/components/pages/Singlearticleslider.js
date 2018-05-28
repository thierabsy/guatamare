import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../path';
import Slider from 'react-slick';

// import { articles } from '../data/articles';

class Singlearticleslider extends Component {
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
    render(props) {
        let settings = {
            infinite: true,
            speed: 5000,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            autoplay: true
        };
        let pageCategorie = this.props.pageCategorie;
        let article = this.props.article;
        let articles = this.props.articles;
        let singlearticleslider = () => {
            return(
                articles ?  articles.filter(a => a.categorie === pageCategorie && a.titre !== article)
                    .map((page, index) => {
                        let link2 = page.titre.split(" ").join("-").toLowerCase()+"-"+page.id;
                        return(
                            <div className="cardwrapper" key={index}>
                                <div className="card" >
                                    <img src={`${ urlPath }/storage/auteur/${page.image}`} className="card-img-top" />
                                    <div className="card-body text">
                                        {/* <h4 className="card-title" >{page.categorie} {index+1} </h4> */}
                                        <p className="card-text" >{page.titre}</p>
                                        <Link to={`/categorie/${page.categorie}/${link2}`} >
                                            <button className="btn btn-block">Lire...</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                }) : <div></div>
            );
        }
        return (
            <div className="categorieslider" >
                <div className="taheader">
                    <div className="span"><span>Dans la même catégorie</span></div>
                    <div className="line"></div>
                </div>
                <div className="singlearticleslider">
                    <Slider ref={sas => this.slider = sas } {...settings} className="sliderwrapper" >
                        {/* <Singlearticleslider  /> */}
                        { singlearticleslider() }
                    </Slider>
                    <div className="prevnext" >
                        <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                        <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                    </div> 
                </div>
            </div>
    );
    }
}

export default Singlearticleslider;
