import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';

import { mainsliders } from '../data/mainsliders';

class Offrespartenaires extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = ({
            nbsponsor: 3
        })
    }
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }
    componentWillMount(){
        if(window.innerWidth < 900){
            this.setState({
                nbsponsor: 2
            })
        }
    }
    render() {
        // let singlepaneliste = () => {
        //     return(
        //         mainsliders.map((item, index) => {
        //             return(
        //                 <div key={index}>
        //                    <a href={`img/${item.link}`}>
        //                         <img src={`img/${item.img}`} />
        //                         <div className="text">
        //                             <h3>{item.title}</h3>
        //                             <p>{item.subtitle}</p>
        //                             <button className="btn">Lire...</button>
        //                         </div> 
        //                    </a>
        //                 </div>
        //             );
        //         })
        //     );
        // }
        
        let settings = {
            infinite: true,
            speed: 5000,
            slidesToShow: this.state.nbsponsor,
            slidesToScroll: this.state.nbsponsor,
            arrows: false,
            autoplay: true
        };
        return (
            <div className="offrespartenaires">
            <div className="row">
                <div className="col col-sm-12 col-md-9">
                    <div className="taheader">
                        <div className="span"><span>NOS SPONSORS</span></div>
                        <div className="line"></div>
                    </div>
                    <div className="left">

                        <Slider ref={op => this.slider = op } {...settings} className="sliderwrapper" >
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres.jpg`} />
                                        <h5>Partenaire 1</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres2.jpg`} />
                                        <h5>Partenaire 2</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                     </a>
                                </div>
                            </div>
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres.jpg`} />
                                        <h5>Partenaire 3</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                     </a>
                                </div>
                            </div>
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres2.jpg`} />
                                        <h5>Partenaire 4</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                     </a>
                                </div>
                            </div>
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres.jpg`} />
                                        <h5>Partenaire 5</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="offre">
                                <div className="pwrapper"> 
                                    <a href="#">
                                        <img src={`${urlPath}/img/offres2.jpg`} />
                                        <h5>Partenaire 6</h5>
                                        <i className="fas fa-angle-double-left"></i> info <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                        <div className="prevnext" >
                            <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                            <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                        </div> 
                    </div>
                </div>
                <div className="col col-sm-12 col-md-3 right">
                    <div className="devenirsponsor">
                        <a href="#" >
                            <span>Devenez Sponsor</span> <br />
                            <i className="fas fa-bullhorn fa1"></i>
                            <i className="fas fa-bullhorn fa2"></i>
                            <i className="fas fa-bullhorn fa3"></i>
                        </a>
                    </div>
                    </div>
                </div>
        </div>
    );
    }
}

export default Offrespartenaires;
