import React from 'react';

import FileUpload from '../FileUpload';
import BtnSubmit from '../BtnSubmit';


const AnnonceurPubCoverjs = ({previewCv, dz}) => {
        return (
            <div className="banner">
                <div className="pubbanner" >
                    <h3>Annonce en haut (Bannière large)</h3> 
                    <h5 style={{marginBottom:"0px", marginTop: "10px", fontWeight:"bold" }}>Choisir Image</h5> 
                    <span className="taille" >(Taille: 1150x2000)</span>
                    <form action="">
                        <FileUpload dz={dz}>
                            <span className="imgchoice" > <i className="fas fa-upload" /> {previewCv ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                        </FileUpload>
                        { previewCv && <hr />}
                        { previewCv && <img src={previewCv} className="imgBanner" />}
                        { previewCv && <hr />}
                        <div className="form-group">
                            <label className="form-input-label" htmlFor="alttext" style={{marginTop: "20px" }}>Texte alternatif à l'image</label>
                            <input type="text" id="alttext" className="alttext form-control" placeholder="Texte de remplacement" />
                        </div>
                        <div className="form-group">
                            <label className="form-input-label">Lien de redirection</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="siteweb">www.</span>
                                </div>
                                <input type="text" id="siteweb" className="form-control" placeholder="siteweb" aria-label="siteweb" aria-describedby="siteweb" />
                            </div>
                        </div>
                        <hr />
                        <BtnSubmit condition={previewCv} />
                    </form>
                </div>
            </div>
        );
    }

export default AnnonceurPubCoverjs;
