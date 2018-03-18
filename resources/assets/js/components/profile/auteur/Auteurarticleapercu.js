import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { urlPath } from '../../path';
import Auteurresumeview from './Auteurresumeview';
import Auteurfullarticle from './Auteurfullarticle';

class Auteurarticleapercu extends Component {
    render(){
        return (
            <div className="auteurarticleapercu">
                <Auteurresumeview rv={this.props.currentArticle} />
                <hr />
                <Auteurfullarticle fa={this.props.currentArticle}  />
                <hr />
                <div className="btnlinks text-center">
                    <Link to="#"><button className="btn btn-primary btnlinks"><i className="fas fa-edit"></i> Modifier </button></Link>
                    <Link to="#"><button className="btn btn-success btnlinks"><i className="fas fa-share-square"></i> Poster </button></Link>
                </div> 
            </div>
        );
    }
}

export default Auteurarticleapercu;
