import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';
import FileUpload from '../FileUpload';
import ColorPicker from '../ColorPicker';


let submitProfil = (e)=>{
    e.preventDefault()

}
let inputChange = (e)=>{
    e.preventDefault()
    
}

const Annonceurprofil = ({dz, preview, handlePicker, showPicker, pickedColor, color, profilChange, postPubProfil}) => {
        return (
            <div className="auteurprofil">
                <form action="" onSubmit={submitProfil}>
                    <div className="form-group">
                        <label htmlFor="nom" className="form-label">Nom</label> <span>*</span>
                        <input type="text" className="form-control" onChange={(e) => profilChange(e)} id="nom" name="nom" placeholder="Entrez votre nom et prénom(s)" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label> <span>*</span>
                        <input type="email" className="form-control" onChange={(e) => profilChange(e)} id="email" name="email" placeholder="Entrez votre email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pays"> Pays </label> <span>*</span>
                        <input type="country" className="form-control" onChange={(e) => profilChange(e)} id="pays" name="pays" placeholder="Sélectionnez votre pays" />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="fonction"> Secteur </label> <span>*</span>
                        <input type="text" className="form-control" onChange={(e) => profilChange(e)} id="secteur" name="secteur" placeholder="Entrez votre secteur d'activité" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Description de votre structure </label> <span>*</span>
                        <textarea rows="3" className="form-control" onChange={(e) => profilChange(e)} id="description" name="description" placeholder="Entrez votre description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Logo </label> <span>*</span>
                        {/* <input type="file" className="form-control" id="logo" name="logo" /> */}
                        <FileUpload dz={dz} >
                            <span className="imgchoice"> <i className="fas fa-upload" /> {preview ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                            { preview && <img src={preview} className="logo" />} 
                        </FileUpload>
                        <span> Format: jpg ou png</span>
                    </div>
                    <ColorPicker 
                        showPicker={showPicker} 
                        handlePicker={handlePicker} 
                        pickedColor={pickedColor}
                        color={color} 
                    />
                    <div className="form-group">
                        <label>Réseaux sociaux</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="linkedin">www.linkedin.com/in/</span>
                            </div>
                            <input type="text" id="linkedin" onChange={(e) => profilChange(e)} name="linkedin" className="form-control" placeholder="linkedin" aria-label="linkedin" aria-describedby="linkedin" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="facebook">www.facebook.com/</span>
                            </div>
                            <input type="text" id="facebook" onChange={(e) => profilChange(e)} name="facebook" className="form-control" placeholder="Facebook" aria-label="Facebook" aria-describedby="facebook" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="twitter">@</span>
                            </div>
                            <input type="text" id="twitter" onChange={(e) => profilChange(e)} name="twitter" className="form-control" placeholder="Twitter" aria-label="Twitter" aria-describedby="twitter" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file"> Votre Catalogue </label>
                        <input type="file" className="form-control" onChange={(e) => profilChange(e)} id="catalogue" name="catalogue" placeholder="Entrez votre catalogue" />
                    </div>
                    <button type="submit" className="btn btn-success btnlinks" onClick={() => postPubProfil()} ><i className="fas fa-save"></i> Enregistrer </button>
                </form>
            </div>
        );
    }

export default Annonceurprofil;
