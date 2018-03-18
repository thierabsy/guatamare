import React from 'react';
import { urlPath } from '../path';

const Footertop = () => {
        return (
            <div className="footertop">
            <div className="container">
                <div className="row">
                    <div className="col col-md-4 p1">
                        <img src={`${urlPath}/img/logo.png`} />
                        <h2><span>GUATAMARE</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col col-md-4 p2">
                        <h2><span>CONTACT</span></h2>
                        <ul>
                            <li><span>Addresse: </span> Place de l'Indépendance, Dakar</li>
                            <li><span>E-mail: </span> info@guatamare.com</li>
                            <li><span>Téléphone: </span> 33 800 00 01</li>
                        </ul>
                        <h2><span>SERVICE COMMERCIAL</span></h2>
                        <ul>
                            <li><span>E-mail: </span> info@guatamare.info</li>
                            <li><span>Téléphone: </span> 33 800 00 01</li>
                        </ul>
                    </div>
                    <div className="col col-md-4 p3">
                        <h2><span> RESTEZ CONNECTER</span></h2>
                        <div className="staytunned">
                            <a href="#"><i className="fab fa-linkedin rsi"></i></a>
                            <a href="#"><i className="fab fa-facebook-square rsi"></i></a>
                            <a href="#"><i className="fab fa-twitter-square rsi"></i></a>
                            <a href="#"><i className="fab fa-youtube-square rsi"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        ); 
    }

export default Footertop; 
