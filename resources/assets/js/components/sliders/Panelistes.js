import React, { Component } from 'react';
import Slider from 'react-slick';

import { urlPath } from '../path';
import { panelistes } from '../data/panelistes';

class Panelistes extends Component {
    constructor(props) {
    super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state= ({
            nbslide: 5
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
                nbslide: 2
            })
        }
    }
    render() {
        let singlepaneliste = () => {
            return(
                panelistes.map((item, index) => {
                    return(
                        <div key={index} className="paneliste">
                            <div className="pwrapper"> 
                                <a href={item.link} >
                                    <img src={`${urlPath}/img/${item.img}`} />
                                    <h5> {item.name} </h5>
                                </a>
                            </div>
                        </div>
                    );
                })
            );
        }

        let settings = {
                infinite: true,
                speed: 5000,
                slidesToShow: this.state.nbslide,
                slidesToScroll: this.state.nbslide,
                arrows: false,
                autoplay: true
            };
        return (
            <div className="row panelistes" >
                <div className="col col-md-9 pslider" >
                    <div className="psheader">
                        <h5>DES PANELISTES DE HAUT NIVEAU</h5>
                        <p>Nos panelistes vous fournissent des analyses pertinentes sur des sujets ....</p>
                    </div> 
                    <Slider ref={v => this.slider = v } {...settings} className="sliderwrapper" >
                        { singlepaneliste() }
                    </Slider>
                    <div className="prevnext" >
                        <button className='btx prev' onClick={this.previous}> <i className="fas fa-angle-left"></i> </button>
                        <button className='btx next' onClick={this.next}> <i className="fas fa-angle-right"></i> </button>
                    </div> 
                </div>
                <div className="col col-md-3 pdc" >
                    <div className="paneldecouvrir">
                        <a href="#">
                            <h4>Decouvrez nos differents panels</h4>
                            <i className="fas fa-reply-all"></i>
                        </a>
                    </div>
                </div>
        </div>
    );
    }
}

export default Panelistes;
