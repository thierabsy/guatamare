import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../path';

class Topheader extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            minutes:  new Date().getUTCMinutes(),
            hours: new Date().getUTCHours(),
        }
    }
    componentDidMount(){
        
        setInterval(
            ()=> this.setState({seconds: new Date().getUTCSeconds()}
            ), 1000
        )
        setInterval(
            ()=> this.setState({minutes: new Date().getUTCMinutes()}
            ), 1000
        )
        setInterval(
            ()=> this.setState({hours:  new Date().getUTCHours()}
            ), 10000
        )

    }
    render(){
        let d = new Date();
        let today = d.getDate();
        let month = d.getMonth()+1;
        let year = d.getFullYear();
        return (
            <div className="row">
                <div className="col col-sm-6">
                    <div className="allersite">
                        <Link to="../" target="_blank">
                            <span>GUATAMARE</span> <br />
                            <img src={`${urlPath}/img/logo.png`} /> <br />
                            <span>Aller au site</span>
                        </Link>
                    </div>
                </div>
                <div className="col col-sm-6 text-right">
                    <div className="datetime">
                        <span className="torotate tr1"></span>
                        {/* <span className="torotate tr2"></span>
                        <span className="torotate tr3"></span> */}
                        <span className="torotate tr4"></span>
                        <span className="date">Date:  {('0'+today).slice(-2) }-{ ('0'+month).slice(-2) }-{year} </span> <br />
                        <span className="time">Heure UTC <br/> {  ('0'+this.state.hours).slice(-2) }:{ ('0'+this.state.minutes).slice(-2)}:{ ('0'+this.state.seconds).slice(-2) } </span>
                        {/* <span className="torotate tr3"> { this.state.hours < 14 ? "Bonsoir" : "Bonjour" } </span> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Topheader;
