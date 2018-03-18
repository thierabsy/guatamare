import React, { Component } from 'react';

import Header from '../shared/Header';
import Mainslider from '../sliders/Mainslider';
import Articles from './Articles';
import Newsletter from './Newsletter';
import Toparticles from './Toparticles';
import Offrespartenaires from './Offrespartenaires';
import Nospartenaires from './Nospartenaires';

export default class Homepage extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div className="container maincontainer"> 
                    <Mainslider />
                    <Articles />
                    <Toparticles />
                    <Offrespartenaires path={""} />
                    <Newsletter />
                    <Nospartenaires />
                </div>
            </div>
        );
    }
}

