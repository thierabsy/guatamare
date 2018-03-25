import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';
import Convertisseurdevise from '../shared/Convertisseurdevise';
import { sliderarticlesgroup2 } from '../data/sliderarticlesgroup2';

class Articlesgroup2 extends Component {
    constructor(props) {
    super(props)
        this.state= ({
            atg: 3
        })
    }
    componentWillMount(){
        if(window.innerWidth < 900){
            this.setState({
                atg: 2
            })
        }
    }
    render() {
        
        let settings = {
                infinite: true,
                speed: 5000,
                slidesToShow: this.state.atg,
                dots: true,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                dotsClass: 'asdots'
            };
        let articlesgroup2 = sliderarticlesgroup2.map((item, i) => {
                return (
                    <div key={ i }>
                        <div className="verticalarticle">
                            <img src={`${urlPath}/img/${ item.img }`} />
                            <div className="text">
                                <div className="categorie"><span> { item.categorie } </span></div>
                                <h3 className="text-truncate"> { item.titre } </h3>
                                <p> { item.details } </p>
                                <div className="date">
                                    <i className="fas fa-clock"></i> { item.date }  <i className="fas fa-edit"></i> { item.auteur }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        return (
            <div className="articlesgroup2">
            <div className="row">
                <div className="col col-sm-12 col-md-9 left">
                    <Slider ref={v => this.slider = v } {...settings} className="sliderwrapper" >
                        { articlesgroup2 }
                    </Slider>
                </div>
                <div className="col col-sm-12 col-md-3 right">
                    <Convertisseurdevise />
                </div>
            </div>
          </div>
    );
    }
}

export default Articlesgroup2;
