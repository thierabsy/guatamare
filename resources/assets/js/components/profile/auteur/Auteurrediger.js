import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { panelistes } from '../../data/panelistes';

const Auteurrediger = ({titreChange}) => { 
    // console.log(titreChange)
    
    return (
        <div className="auteurprofil">
            <form action="" >
                <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input  
                        type="text" 
                        id="titre" 
                        name="titre" 
                        placeholder="Entrez le titre de l'article" 
                        onChange={ e => titreChange(e)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fonction"> Catégorie </label> <br />
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="economie" name="economie" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="economie">Economie</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="culture" name="culture" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="culture">Culture</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="tourisme" name="tourisme" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="tourisme">Tourisme</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="humanitaire" name="humanitaire" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="humanitaire">Humanitaire</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="societe" name="societe" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="societe">Société</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="panels" name="panels" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="panels">Panels</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Résumé</label>
                    <input type="text" className="form-control" id="resume" name="resume" placeholder="Entrez un court résumé de l'article" />
                </div>
                <div className="form-group">
                    <label htmlFor="mainimage">Choisir l'image principal</label>
                    <input type="file" className="form-control" id="mainimage" name="mainimage" />
                    <span> Format: jpg ou png</span>
                </div>
                <div className="form-group">
                    <label htmlFor="articlebody"> Contenu de l'article </label>
                    <ReactQuill 
                        modules={Auteurrediger.modules}
                        formats={Auteurrediger.formats}
                        rows="10" 
                        id="articlebody" 
                        name="articlebody" 
                        placeholder="Votre article ici ........."
                        className="form-control"
                    />                    
                </div>
                <button type="submit" className="btn btn-primary btnlinks"><i className="fas fa-save"></i> Enregistrer </button>
            </form>
        </div>
 );
}
      
   
Auteurrediger.modules = {
    toolbar: [
        [{ header: '1'}, { header: '2'}, { header: '3'}, { header: '4'}, {font: []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
};
Auteurrediger.formats = [
    'header','font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list',
    'bullet', 'link', 'image', 'video'
];

export default Auteurrediger;
