import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';
import Convertisseurdevise from '../shared/Convertisseurdevise';

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
        return (
            <div className="articlesgroup2">
            <div className="row">
                <div className="col col-sm-12 col-md-9 left">
                    <Slider ref={v => this.slider = v } {...settings} className="sliderwrapper" >
                        <div>
                            <div className="verticalarticle">
                                <img src={`${urlPath}/img/article1.jpg`} />
                                <div className="text">
                                    <div className="categorie"><span> HUMANITAIRE </span></div>
                                    <h3 className="text-truncate" >L'Humanitaire au coeur du dévéloppement</h3>
                                    <p>Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p> 
                                    <span>Lire...</span>
                                    <div className="date">
                                        <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="verticalarticle">
                                <img src={`${urlPath}/img/article5.jpg`} />
                                <div className="text">
                                    <div className="categorie"><span> TOURISME </span></div>
                                    <h3 className="text-truncate">Les atouts touristiques du Sénégal</h3>
                                    <p> Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                    <span>Lire...</span>
                                    <div className="date">
                                        <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="verticalarticle">
                                <img src={`${urlPath}/img/article6.jpg`} />
                                <div className="text">
                                    <div className="categorie"><span> SPORT </span></div>
                                    <h3 className="text-truncate">Retombées économique de la mondiale</h3>
                                    <p> Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                    <span>Lire...</span>
                                    <div className="date">
                                        <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="verticalarticle">
                            <img src={`${urlPath}/img/article3.png`} />
                            <div className="text">
                                <div className="categorie"><span> HUMANITAIRE </span></div>
                                <h3 className="text-truncate" >L'Humanitaire au coeur du dévéloppement</h3>
                                <p>Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p> 
                                <span>Lire...</span>
                                <div className="date">
                                    <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="verticalarticle">
                            <img src={`${urlPath}/img/article5.jpg`} />
                            <div className="text">
                                <div className="categorie"><span> TOURISME </span></div>
                                <h3 className="text-truncate">Les atouts touristiques du Sénégal</h3>
                                <p> Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                <span>Lire...</span>
                                <div className="date">
                                    <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="verticalarticle">
                                <img src={`${urlPath}/img/article6.jpg`} />
                                <div className="text">
                                    <div className="categorie"><span> SPORT </span></div>
                                    <h3 className="text-truncate">Retombées économique de la mondiale</h3>
                                    <p> Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                    <span>Lire...</span>
                                    <div className="date">
                                        <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                    </div>
                                </div>
                            </div>
                        </div>
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
