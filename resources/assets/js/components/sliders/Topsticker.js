import React, { Component } from 'react';
import Slider from 'react-slick';

import { topsticker } from '../data/topsticker';

class Topsticker extends Component {
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
        let singleslide = () => {
            return(
                topsticker.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="row">
                                <div className="col col-md-10">
                                <span>{item.name}: </span>{item.truncate}
                                </div>
                                <div className="col col-md-2 details">
                                    <a href={item.link}>
                                        <button className="btn btn-primary btn-sm">Détails</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }
        let settings = {
                infinite: true,
                speed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                vertical: true,
                autoplay: true
            };
        return (
            <div className=" topstickerslider" >
                
                <Slider ref={c => this.slider = c } {...settings} className="sliderwrapper" >
                    { singleslide() }
                </Slider>
                <div className="prevnext" >
                    <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-up"></i> </button>
                    <button className='btx next' onClick={this.next}> <i className="fas fa-angle-down"></i> </button>
                </div>
            
        </div>
    );
    }
}

export default Topsticker;
