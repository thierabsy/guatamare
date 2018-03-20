import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { urlPath } from '../../path';

const Auteurfullarticle = ({fa, preview}) => {
    return(
        <div className="fullarticle">
            <h3>Article entier</h3> <span className="parties">(Titre, Image, Contenu)</span>
            <hr />
            <div className="singlearticle">
                <div className="articleContent" >
                    <h3 className="title" >{ fa.titre } </h3>
                    <div className="articleauteur">
                        <span className="span1"><i className="fas fa-edit"></i> Auteur</span>
                        <span className="span2"><i className="fas fa-clock"></i> 04-04-2018</span>
                    </div>
                    <img src={preview || `${urlPath}/img/economie.jpg`} className="mainImage" />
                    <div className="text">
                        { fa.articlebody && renderHTML(fa.articlebody) }
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

export default Auteurfullarticle;
