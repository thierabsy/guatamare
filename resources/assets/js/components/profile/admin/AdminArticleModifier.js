import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { panelistes } from '../../data/panelistes';
import FileUpload from '../FileUpload';

const AdminArticleModifier = ({ art, titreChange, getbd, dz, preview, fermer }) => { 
    // console.log(getContents(): Delta)
    
    return (
        <div className="auteurprofil">
            <div className="annulerFermer" onClick={ () => fermer()} >Fermer</div> 
            <form action="" encType="multipart/form-data" >
                <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input  
                        type="text" 
                        id="titre" 
                        name="titre" 
                        placeholder="Entrez le titre de l'article" 
                        onChange={ e => titreChange(e) }
                        className="form-control"
                        defaultValue={ art.titre }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fonction"> Catégorie </label> <br />
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="economie" name="categorie" className="custom-control-input" value="economie" onChange={ e => titreChange(e) } />
                        <label className="custom-control-label" htmlFor="economie">Economie</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="culture" name="categorie" className="custom-control-input" value="culture" onChange={ e => titreChange(e) } />
                        <label className="custom-control-label" htmlFor="culture">Culture</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="tourisme" name="categorie" className="custom-control-input" value="tourisme" onChange={ e => titreChange(e) }/>
                        <label className="custom-control-label" htmlFor="tourisme">Tourisme</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="humanitaire" name="categorie" className="custom-control-input" value="humanitaire" onChange={ e => titreChange(e) }/>
                        <label className="custom-control-label" htmlFor="humanitaire">Humanitaire</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="societe" name="categorie" className="custom-control-input" value="societe" onChange={ e => titreChange(e) }/>
                        <label className="custom-control-label" htmlFor="societe">Société</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sante" name="categorie" className="custom-control-input" value="sante" onChange={ e => titreChange(e) }/>
                        <label className="custom-control-label" htmlFor="sante">Santé</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="status">Status</label>
                            </div>
                            <select className="custom-select" name="status" value={art.status} onChange={ e => titreChange(e) }>
                                <option selected>Visibilité...</option>
                                <option value="active">Active</option>
                                <option value="desactive">Désactivé</option>
                                <option value="draft">Draft</option>
                                <option value="ancien">Ancien</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="slider">Slider</label>
                            </div>
                            <select className="custom-select" name="slider" value={art.slider} onChange={ e => titreChange(e) }>
                                <option value="na" >non</option>
                                <option value="sl_main">Principal</option>
                                <option value="sl_top3">Top 3</option>
                                <option value="sl_top2">Top 2</option>
                                <option value="sl_horizontalArticle">Second Slider</option>
                                <option value="sl_topArticle">Top Articles</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Résumé</label>
                    <textarea  
                        className="form-control" 
                        id="resume" 
                        name="resume" 
                        placeholder="Entrez un court résumé de l'article" 
                        rows="2"
                        onChange={ e => titreChange(e) }
                        defaultValue={ art.resume }
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="mainimage">Choisir l'image principal</label>
                    {/* <input type="file" className="form-control" id="mainimage" name="mainimage" onChange={ e => imgLoaded(e) } /> */}
                    <FileUpload dz={dz} >
                        <span className="imgchoice"> <i className="fas fa-upload" /> {preview ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                        { preview ? 
                            <img src={preview} /> : 
                            <img src={`${urlPath}/storage/auteur/${art.image}`} />
                        } 
                    </FileUpload>
                    <span> Format: jpg ou png</span>
                </div>
                <div className="form-group">
                    <label htmlFor="articlebody"> Contenu de l'article </label>
                    <ReactQuill 
                        modules={AdminArticleModifier.modules}
                        formats={AdminArticleModifier.formats}
                        rows="10" 
                        id="articlebody" 
                        name="articlebody" 
                        placeholder="Votre article ici ........."
                        className="form-control"
                        value={ art.articlebody }
                        onChange={ value => getbd(value) }
                    />                    
                </div>
                {/* <input type="hidden" value={{ csrf_token() }} name="_token" /> */}
                <button type="submit" className="btn btn-primary btnlinks"><i className="fas fa-save"></i> Enregistrer </button>
            </form>
        </div>
 );
}
      
// [{ 'header': 1}, { 'header': 2}, { 'header': 3}, { 'header': 4}, {'font': []}],
AdminArticleModifier.modules = {
    toolbar: [
        [{'header': [1, 2, 3, 4, 5, 6, false] }],
        [{'size': []}],
        [{'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{'align': [] }],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
};
AdminArticleModifier.formats = [
    'header','font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list',
    'bullet', 'indent', 'link', 'image', 'video', 'color', 'background', 'align'
];

export default AdminArticleModifier;
