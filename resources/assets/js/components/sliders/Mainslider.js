import React, { Component } from 'react';
import Slider from 'react-slick';

import { mainsliders } from '../data/mainsliders';
import Sidebarad1 from '../ads/Sidebarad1';
import Meteo from '../shared/Meteo';

class Mainslider extends Component {
    constructor(props) {
    super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = {
            data: this.props.data || []
        }
    }
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }
    render(props) {
        let dataActive =  this.props.data;
        let singleslide = () => {
            return(
                dataActive ?  dataActive.filter(a => a.slider === "sl_main").map((item, index) => {
                    return(
                        <div key={index}>
                            <a href={`categorie/${item.categorie}/${item.titre}`}>
                                    <img src={`storage/auteur/${item.image}`} />
                                    <div className="text">
                                        <h3>{item.titre}</h3>
                                        {/* <p>{item.resume}</p> */}
                                        <button className="btn">Lire...</button>
                                    </div> 
                            </a> 
                        </div>
                    );
                }) : <div></div>
            );
        }
       
        let top3 = dataActive ? dataActive.filter(a => a.slider === "sl_top3").map((item, index) => {
                    return <div key={index} className="col col-sm-4 col-md-12">
                                <a href={`img/${item.categorie}`}>
                                <img src={`storage/auteur/${item.image}`} />
                                <div className="title">
                                    <h4>{item.categorie}</h4>
                                    <p>{item.titre}</p>
                                </div>
                                </a>
                            </div>}) : <div></div>
                
        let settings = {
                infinite: true,
                speed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                fade:true
            };
        return (
            <div className="row mainslider" >
                <div className="col col-md-9" >
                    <div className="row">
                        <div className="col col-md-9">
                            <Slider ref={m => this.slider = m } {...settings} className="sliderwrapper" >
                                { singleslide() }
                            </Slider>
                            <div className="prevnext" >
                                <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                                <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                            </div> 
                        </div>
                        <div className="col col-md-3 msright">
                            <div className="row">
                                { top3 }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-md-3 admeteo" >
                    <div className="row">
                        <div className="col col-sm-7 col-md-12 meteo">
                            <Meteo />
                        </div>
                        <div className="col col-sm-5 col-md-12 ad">
                            <Sidebarad1 />
                        </div>
                    </div>
                </div>
        </div>
    );
    }
}

export default Mainslider;
