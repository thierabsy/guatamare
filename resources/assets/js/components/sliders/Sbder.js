import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';

import { ongslider } from '../data/ongslider';

class Sbder extends Component {
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
        let ong = ongslider.map((ong, i) => {
            return (
                <div className="ong" key={1}>
                    <div className="pwrapper"> 
                        <a href={ong.link}>
                            <img src={`${urlPath}/img/${ong.img}`} title={ong.name} alt={ong.name} />
                        </a>
                    </div>
                </div>
            )
        })
        return (
            <div className="row sidebarslider" >
                <div className="sbslider">
                    <div className="psheader">
                        <h5><span>PARTENAIRES</span> </h5>
                    </div> 
                    <Slider ref={sbs => this.slider = sbs } {...settings} className="sliderwrapper" >
                       { ong }
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

export default Sbder;
