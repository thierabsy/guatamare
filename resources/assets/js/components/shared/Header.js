import React, { Component } from 'react';
import Hpheadernavbar from './Hpheadernavbar';
import Hpheadertop from './Hpheadertop';

export default class Header extends Component {
    constructor(props){
        super(props);
    }
    
    // componentWillMount(){
    //     this.showconnection()
    // }
    render() {
        // console.log(this.props.match)
        return (
            <div className="container" >
                <Hpheadertop />
                <Hpheadernavbar />
            </div>
        );
    }
}

