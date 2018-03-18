import React, {Component} from 'react';
import { urlPath } from '../path';

import groupBy from 'lodash/groupBy';

import { boutiques } from "../data/boutiques";

class Boutiques extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMe: true
        }

    }
    showFunc(){
        this.setState({
            showMe: false
        });
    }
    render(){
        let grouped = _.groupBy(boutiques, "boutique");
        //     console.log(Object.keys(grouped));
        //     let akeys = Object.keys(grouped);
        //     console.log(grouped[akeys[1]].map(t => t.boutique));
        //     console.log(keys[1]);
        //    console.log(grouped.a1.map(item => { for(let it in item){ return it}} ));
        // let msld = () => {
        //     for (let a in this.grouped.values()){
        //         console.log(a);
        //         <div className="sliderr">
        //             {/* {grouped[a].map(p => console.log(p.boutique, p.img))} */}
        //             {grouped[a].map(p => {
                        
        //                 {console.log(p)}
        //                 ( 
        //                     <div><span key={p.img}> {p.boutique}</span></div>
        //                 )
        //             })}
        //             {/* {p.boutique} : {p.img} */}
        //         </div>
        //     }
        // }
        // console.log(msld);
        // function msld() {
        //     for(let i=0; i<grouped.length; i++){
        //         for(let j=0; j<grouped[1].length; j++){
        //             console.log(grouped[i][j]);
        //         }
        //     }
        // }
        // console.log(msld);
        
        let singleboutique = () => {
            return(
                boutiques.map((btk, index) => {
                    return(
                        <div className="col col-md-4 col-sm-6 btk" key={index} >
                            <div className="btkinnerwrapper" onMouseEnter={this.audioPlay} >
                                <div className="imgwrapper"><img src={`${urlPath}/img/${btk.img}.jpg`} /></div>
                                <div className="btkText">
                                    <a href={btk.link} target="_blank">
                                        <h4>{btk.boutique}</h4>
                                        <h5 id="h5" >{btk.description}</h5>
                                        {/* <i className="fas fa-reply"></i> */}
                                        <audio id="audio"src="son.wav" type="audio/wav"></audio>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
  return (
            <div className="nosboutiques">
                <div className="textHeader">
                    <i className="fas fa-shopping-cart" onClick={this.showFunc.bind(this)} ></i>
                    { this.state.showMe ? <h4><span>Offres de nos partenaires</span></h4> : ""}
                </div>
                <div className="row boutiquewrapper">
                    { singleboutique()}
                </div>
            </div>
         );
    }
}

export default Boutiques;
