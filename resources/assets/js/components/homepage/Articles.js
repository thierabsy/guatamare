import React, { Component } from 'react';
import Articlesgroup1 from './Articlesgroup1';
import Articlesgroup2 from './Articlesgroup2';
import Panelistes from '../sliders/Panelistes';

const Articles = ({data}) => {
        return (
            <div className="articles">
                <Articlesgroup1 data={data} />
                <Panelistes />
                <Articlesgroup2 data={data} />
            </div>
        );
}

export default Articles;

