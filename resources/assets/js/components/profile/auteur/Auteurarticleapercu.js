import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { urlPath } from '../../path';
import Auteurresumeview from './Auteurresumeview';
import Auteurfullarticle from './Auteurfullarticle';

const Auteurarticleapercu = ({currentArticle, preview})=> {
        return (
            <div className="auteurarticleapercu">
                <Auteurresumeview rv={ currentArticle } preview={preview} />
                <hr />
                <Auteurfullarticle fa={ currentArticle } preview={preview}   />
                <hr />
                <div className="btnlinks text-center">
                    <Link to="?action=Rédiger%20un%20article"><button className="btn btn-primary btnlinks"><i className="fas fa-edit"></i> Modifier </button></Link>
                    <Link to="?action=Poster%20un%20article"><button className="btn btn-success btnlinks"><i className="fas fa-share-square"></i> Suivant </button></Link>
                </div> 
            </div>
        );
}

export default Auteurarticleapercu;
