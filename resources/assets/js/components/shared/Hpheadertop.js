import React, {Component} from 'react';
import Topsticker from '../sliders/Topsticker';
import Hpheaderbanner from '../ads/Hpheaderbanner';
import { Link } from 'react-router-dom';
import { urlPath } from '../path';

class Hpheadertop extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconnecter: false
        }
        // this.showconnection = this.showconnection.bind(this);
    }
    showconnection(){
        this.setState({ seconnecter: true});
        console.log(this.state.seconnecter);
    }
       render(){
           let seconnecter = this.state.seconnecter;
           console.log(seconnecter);
        return (
            <div className="">
                <div className="beforenavbar">
                    <div className="topsticker">
                        <div className="menu">
                            <div className="icontext" onClick={ this.showconnection }>
                                {/* <i className="fas fa-menu"></i> */}
                                <i className="fas fa-bars"></i>
                                <span>MENU</span>
                            </div>
                        </div>
                        {/* <div className="newsticker" id="newsticker">
                            <Topsticker /> */}
                            <div className="mybrand">
                                <img src={`${ urlPath }/img/logo.png`} /> GUATAMARE
                            </div>
                            <div className="search">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Rechercher sur le site" placeholder="Recherche ....." />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-search"></i> </span>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                        <div className="rightItems">
                            <ul>
                                <li>
                                    <div className="icontext">
                                        <i className="fas fa-newspaper"></i>
                                        <Link to="/kiosque"><span>KIOSQUE</span> </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="icontext">
                                        <i className="fas fa-envelope" ></i>
                                        <span>NEWSLETTER</span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="icontext" >
                                        <i className="fas fa-user"></i>
                                        <span className="text-truncate" >SE CONNECTER</span>
                                        <div className="modalConnect"  >
                                            <form>
                                                <input type="text" className="form-control" id="identifiant" placeholder="Identifiant" />
                                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                                <button type="submit" className="btn  btn-block">Se Connecter</button>
                                            </form>
                                            <div className="contacterNous">Contacter nous pour un compte <span>info@guatamare.com</span></div>
                                        </div> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                
                
                    </div>
                    <Hpheaderbanner />
                </div>
            </div>
        );
       }
    }

export default Hpheadertop;
