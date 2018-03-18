import React from 'react';
import Topsticker from '../sliders/Topsticker';
import { urlPath } from '../path';

const Footercopy = () => {
        return (
            <div className="footercopy">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-4">
                        &copy; {(new Date().getFullYear())} Guatamare
                    </div>
                    <div className="col col-sm-4">
                        <img src={`${ urlPath }/img/senflag.png`}/>SENEGAL
                    </div>
                    <div className="col col-sm-4">
                        Site credit: <a href="#"><span>SYTEKR</span></a>
                    </div>
                </div>
                </div>
            </div>
        );
    }

export default Footercopy;
