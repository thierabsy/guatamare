import React, { Component } from 'react';
import Articlesgroup1 from './Articlesgroup1';
import Articlesgroup2 from './Articlesgroup2';
import Panelistes from '../sliders/Panelistes';

export default class Articles extends Component {
    render() {
        return (
            <div className="articles">
                <Articlesgroup1 />
                <Panelistes />
                <Articlesgroup2 />
            </div>
        );
    }
}

