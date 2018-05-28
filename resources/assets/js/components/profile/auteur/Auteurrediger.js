import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { panelistes } from '../../data/panelistes';
import FileUpload from '../FileUpload';

const Auteurrediger = ({titreChange, imgLoaded, dz, preview, getbd, currentArticle}) => { 
    // console.log(getContents(): Delta)
    
    return (
        <div className="auteurprofil">
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
                        defaultValue={ currentArticle.titre }
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
                        <input type="radio" id="environnement" name="categorie" className="custom-control-input" value="environnement" onChange={ e => titreChange(e) }/>
                        <label className="custom-control-label" htmlFor="environnement">Environnement</label>
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
                {/* <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}
                <div className="form-group">
                    <label htmlFor="resume">Résumé</label>
                    <textarea  
                        className="form-control" 
                        id="resume" 
                        name="resume" 
                        placeholder="Entrez un court résumé de l'article" 
                        rows="2"
                        onChange={ e => titreChange(e) }
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="mainimage">Choisir l'image principal</label>
                    {/* <input type="file" className="form-control" id="mainimage" name="mainimage" onChange={ e => imgLoaded(e) } /> */}
                    <FileUpload dz={dz} >
                        <span className="imgchoice"> <i className="fas fa-upload" /> {preview ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                        { preview && <img src={preview} />} 
                    </FileUpload>
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
                        value={ currentArticle.articlebody }
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
Auteurrediger.modules = {
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
Auteurrediger.formats = [
    'header','font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list',
    'bullet', 'indent', 'link', 'image', 'video', 'color', 'background', 'align'
];

export default Auteurrediger;
