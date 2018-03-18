import React, { Component } from 'react';
import Footertop from './Footertop';
import Footercopy from './Footercopy';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Footertop />
                <Footercopy />
            </div>
        );
    }
}

