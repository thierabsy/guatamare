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

const Auteurprofil = ({dz, dzAvatar, dzCv, cv, preview, handlePicker, showPicker, pickedColor, color, profilChange, postAuteurProfil}) => {
        return (
            <div className="auteurprofil">
                <form action="" onSubmit={submitProfil}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nom et Prénom(s)</label> <span>*</span>
                        <input type="text" className="form-control" id="nom" name="nom" placeholder="Entrez votre nom et prénom(s)" onChange={(e)=> profilChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label> <span>*</span>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre email" onChange={(e)=> profilChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pays"> Pays </label> <span>*</span>
                        <input type="country" className="form-control" id="pays" name="pays" placeholder="Sélectionnez votre pays" onChange={(e)=> profilChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Fonction </label> <span>*</span>
                        <input type="text" className="form-control" id="fonction" name="fonction" placeholder="Entrez votre fonction" onChange={(e)=> profilChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Biographie </label> <span>*</span>
                        <textarea rows="3" className="form-control" id="bio" name="bio" placeholder="Entrez votre biographie" onChange={(e)=> profilChange(e)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Avatar (Image) </label> <span>*</span>
                        {/* <input type="file" className="form-control" id="avatar" name="avatar" /> */}
                        <FileUpload dz={dzAvatar} >
                            <span className="imgchoice"> <i className="fas fa-upload" /> {preview ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                            { preview && <img src={preview} className="logo" />} 
                        </FileUpload>
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
                            <input type="text" id="linkedin" name="linkedin" className="form-control" placeholder="linkedin" aria-label="linkedin" aria-describedby="linkedin" onChange={(e)=> profilChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="facebook">www.facebook.com/</span>
                            </div>
                            <input type="text" id="facebook" name="facebook" className="form-control" placeholder="Facebook" aria-label="Facebook" aria-describedby="facebook" onChange={(e)=> profilChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="twitter">@</span>
                            </div>
                            <input type="text" id="twitter" name="twitter" className="form-control" placeholder="Twitter" aria-label="Twitter" aria-describedby="twitter" onChange={(e)=> profilChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Votre CV (au format pdf) </label> <span>*</span>
                        <FileUpload dz={dzCv} >
                            <span className="imgchoice"> <i className="fas fa-upload" /> {cv !== "" ? "Changer votre cv" : "Choisir votre cv ou Glisser et déposer ici"} </span>
                        </FileUpload>
                    </div>
                    <button type="submit" className="btn btn-success btnlinks" onClick={(e)=> postAuteurProfil(e)}><i className="fas fa-save"></i> Enregistrer </button>
                </form>
            </div>
        );
    }

export default Auteurprofil;
