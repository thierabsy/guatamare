import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';

import { partenaires } from '../data/partenaires';

class Nospartenaires extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = ({
            nbnp: 5
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
                nbnp: 2
            })
        }
    }
    render() {
        let singlepartenaire = () => {
            return(
                partenaires.map((item, index) => {
                    return(
                        <div className="partenaire" key={index} >
                            <div className="pwrapper"> 
                                <a href={item.link}>
                                    <img src={`${urlPath}/img/${item.img}`} />
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
            slidesToShow: this.state.nbnp,
            slidesToScroll: this.state.nbnp,
            arrows: false,
            autoplay: true
        };
        return (
            <div className="nospartenaires">
                <h2><span>NOS PARTENAIRES</span> </h2>
                <div className="left">
                    <Slider ref={p => this.slider = p } {...settings} className="sliderwrapper" >
                        { singlepartenaire() }
                    </Slider>
                </div>
        </div>
    );
    }
}

export default Nospartenaires;
