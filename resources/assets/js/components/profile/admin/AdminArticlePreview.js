import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { urlPath } from '../../path';

let d = new Date();
let today = d.getDate();
let month = d.getMonth()+1;
let year = d.getFullYear();

const AdminArticlePreview = ({art, fermer}) => {
    return(
        <div className="fullarticleAdmin">
            <div className="singlearticle">
            <div className="annulerFermer" onClick={ () => fermer()} >Fermer</div> 
                <div className="articleContent" >
                    <h3 className="title" >{ art.titre } </h3>
                    <div className="articleauteur">
                        <span className="span1"><i className="fas fa-edit"></i> Auteur</span>
                        <span className="span2"><i className="fas fa-clock"></i>  { today }-{ month }-{ year } </span>
                    </div>
                    <img src={`${urlPath}/storage/auteur/${art.image}`} className="mainImage" />
                    <div className="text">
                        { art.articlebody && renderHTML(art.articlebody) }
                    </div>
                    <div className="articlefooter">
                        <h4>Dr Mocoudou FAYE</h4>
                        <p>Professeur Université Numérique....</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AdminArticlePreview;
