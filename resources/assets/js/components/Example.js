import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Myroutes from './Myroutes';

export default class Example extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                {/* <Homepage /> */}
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(
        <Myroutes />
    , document.getElementById('example'));
}
