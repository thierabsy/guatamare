import React from 'react';
import { Link } from 'react-router-dom';
import { urlPath } from '../../path';


let submitProfil = (e)=>{
    e.preventDefault()

}
let inputChange = (e)=>{
    e.preventDefault()
    
}

const Auteurprofil = (props) => {
        return (
            <div className="auteurprofil">
                <form action="" onSubmit={submitProfil}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nom et Prénom(s)</label> <span>*</span>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Entrez votre nom et prénom(s)" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label> <span>*</span>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pays"> Pays </label> <span>*</span>
                        <input type="country" className="form-control" id="pays" name="pays" placeholder="Sélectionnez votre pays" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Fonction </label> <span>*</span>
                        <input type="text" className="form-control" id="fonction" name="fonction" placeholder="Entrez votre fonction" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonction"> Biographie </label> <span>*</span>
                        <textarea rows="3" className="form-control" id="bio" name="bio" placeholder="Entrez votre biographie"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color"> Color </label>
                        <input type="color" className="form-control" value="" id="color" name="color" placeholder="Entrez votre couleur préférée" />
                    </div>
                    <div className="form-group">
                        <label>Réseaux sociaux</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="linkedin">www.linkedin.com/in/</span>
                            </div>
                            <input type="text" id="linkedin" className="form-control" placeholder="linkedin" aria-label="linkedin" aria-describedby="linkedin" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="facebook">www.facebook.com/</span>
                            </div>
                            <input type="text" id="facebook" className="form-control" placeholder="Facebook" aria-label="Facebook" aria-describedby="facebook" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="twitter">@</span>
                            </div>
                            <input type="text" id="twitter" className="form-control" placeholder="Twitter" aria-label="Twitter" aria-describedby="twitter" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file"> Votre CV </label>
                        <input type="file" className="form-control" id="cv" name="file" placeholder="Entrez votre couleur préférée" />
                    </div>
                    <button type="submit" className="btn btn-success btnlinks"><i className="fas fa-save"></i> Enregistrer </button>
                </form>
            </div>
        );
    }

export default Auteurprofil;
