import React, {Component} from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';

class Sidebarslider extends Component {
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
        return (
                <div className="sbslider">
                    <div className="psheader">
                        <h5><span>PARTENAIRES</span> </h5>
                    </div> 
                    <Slider ref={sbs => this.slider = sbs } {...settings} className="sliderwrapper" >
                        <div className="ong">
                        <div className="pwrapper"> 
                            <a href="#">
                            <img src={`${urlPath}/img/ong1.png`} />
                            </a>
                            </div>
                        </div>
                        <div className="ong">
                        <div className="pwrapper"> 
                            <a href="#">
                            <img src={`${urlPath}/img/ong2.png`} />
                            </a>
                        </div>
                        </div>
                        <div className="ong">
                        <div className="pwrapper">
                            <a href="#">
                            <img src={`${urlPath}/img/ong3.jpg`} />
                            </a>
                            </div>
                        </div>
                        <div className="ong">
                            <div className="pwrapper">
                                <a href="#">
                                    <img src={`${urlPath}/img/ong4.png`} />
                                </a>
                            </div>
                        </div>
                        <div className="ong">
                        <div className="pwrapper">
                            <a href="#">
                            <img src={`${urlPath}/img/ong5.jpg`} /> 
                            </a>
                            </div>
                        </div>
                    </Slider>
                    <div className="prevnext" >
                        <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                        <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                    </div> 
                </div>
        );
    }
}

export default Sidebarslider; 
