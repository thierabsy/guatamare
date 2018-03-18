import React, { Component } from 'react';
import Slider from 'react-slick';
import { toparticles } from '../data/toparticles';
import { urlPath } from '../path';
import Sidebarslider from '../sliders/Sidebarslider';
import Sidebarad2 from '../ads/Sidebarad2';
// import Sidebarslider from '../sliders/Sidebarslider';

class Toparticles extends Component {
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
        let singlearticle = () => {
            return(
                toparticles.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="verticalarticle">
                                <img src={`${urlPath}/img/${item.img}`} />
                                <div className="text">
                                    <div className="categorie"><span> {item.categorie} </span></div>
                                    <a href="#">
                                        <h3 className="text-truncate" >{item.h3}</h3>
                                        <p>{item.p}</p> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }
        return (
            <div className="toparticles">
            <div className="row">
                <div className="col col-sm-12 col-md-9">
                    <div className="taheader">
                        <div className="span"><span>TOP ARTICLES</span></div>
                        <div className="line"></div>
                    </div>
                    <div className="left">
                        { singlearticle()}
                        { singlearticle()}
                    </div>
                </div>
                <div className="col col-sm-12 col-md-3 right sidebarslider">
                    <Sidebarslider />
                    <Sidebarad2 />
                </div>
            </div>
        </div>
    );
    }
}

export default Toparticles;
