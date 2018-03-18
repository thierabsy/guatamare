import React from 'react';
import { urlPath } from '../path';
import Topsticker from '../sliders/Topsticker';
import Tv from '../shared/Tv';

const Articlesgroup1 = () => {
        return (
            <div className="articlesgroup1">
                <div className="row">
                    <div className="col col-sm-12 col-md-9 left">
                        <div className="row horizontalarticle">
                            <div className="col col-sm-12 col-md-4 img">
                                <img src={`${urlPath}/img/article2.png`} />
                            </div>
                            <div className="col col-sm-12 col-md-8 text">
                                <div className="categorie"><span> ECONOMIE </span></div>
                                <h3>Une Economie booster par les TIC</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ante vel lorem lacinia feugiat. Aenean fringilla fringilla purus, quis pretium nisl vehicula nec. Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                <div className="date">
                                    <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                </div>
                            </div>
                        </div>
                        <div className="row horizontalarticle">
                            <div className="col col-sm-12 col-md-4 img">
                                <img src={`${urlPath}/img/article1.jpg`} />
                            </div>
                            <div className="col col-sm-12 col-md-8 text">
                                <div className="categorie"><span>TOURISME</span></div>
                                <h3>Pointe des Almadies</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ante vel lorem lacinia feugiat. Aenean fringilla fringilla purus, quis pretium nisl vehicula nec. Cras mollis nunc nibh, quis dapibus lorem dictum at. Duis diam enim, ultricies id ex laoreet, tempus gravida mauris. Nulla semper, magna nec feugiat faucibus.</p>
                                <div className="date">
                                    <i className="fas fa-clock"></i> 15 Fevrier 2018  <i className="fas fa-edit"></i> Dr Ahmaht Fall
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-3 right">
                        <Tv />
                    </div>
                </div>
            </div>
        );
    }

export default Articlesgroup1;
