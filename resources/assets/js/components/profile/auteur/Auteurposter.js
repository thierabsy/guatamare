import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';
import Auteuralertes from './Auteuralertes';
import Auteurresumeview from './Auteurresumeview';


const Auteurposter = ({ap, preview, postAuteurArticle}) => {
    // let { titre, resume, image, articlebody } = this.currentArticles;
    return (
        <div className="auteurposter">
            <h3>Merci de votre contribution scientifique pour la communauté</h3>
            <p>Les articles postés sont étudiés par notre comité de publication avant d'être public.</p>
            <p>En postant cet article, vous reconnaissez qu'il est le résultat de votre production scientifique, 
                il est original et que vous juissez de tous les droits d'auteur du contenu (texte, image, vidéo).
            </p>
            <p>Une fois envoyé, vous ne pourrez plus modifier l'article.</p>
            <div className="articleposter">
            <hr />
                <Auteurresumeview rv={ ap } preview={preview} />
            </div>
            <hr />
            <div className="btnlinks text-center">
                <Link to="?action=Rédiger%20un%20article"><button className="btn btn-primary btnlinks"> <i className="fas fa-save"></i> Modifier</button></Link>
                <Link to="#"><button className="btn btn-success btnlinks" onClick={(e) => postAuteurArticle(e)} > <i className="fas fa-share-square"></i> Poster</button></Link>
            </div> 
            <hr />
            <Auteuralertes />
        </div>
    );
}

export default Auteurposter;
