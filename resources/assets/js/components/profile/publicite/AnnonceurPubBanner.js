import React from 'react';

import FileUpload from '../FileUpload';
import BtnSubmit from '../BtnSubmit';


const AnnonceurPubBanner = ({previewB, dz, annonceChange, showAnnonce, page}) => {
        return (
            <div className="banner">
                <div className="pubbanner" >
                    <h3 style={{ fontWeight:"bold" }}>Annonce en haut (Bannière large)</h3> 
                    <h5 style={{marginBottom:"0px", marginTop: "10px", fontWeight:"bold" }} >Choisir Image</h5> 
                    <span className="taille" >(Taille: 710x190)</span>
                    <form action="">
                        <FileUpload dz={dz} onChange={(e) => annonceChange(e)}>
                            <span className="imgchoice" > <i className="fas fa-upload" /> {previewB ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                        </FileUpload>
                        { previewB && <hr />}
                        { previewB && <img src={previewB} className="imgBanner" />}
                        { previewB && <hr />}
                        <div className="form-group">
                            <label className="form-input-label" htmlFor="alttext" style={{marginTop: "20px" }}>Texte alternatif à l'image</label>
                            <input type="text" id="alttext" name="alttext" className="alttext form-control" placeholder="Texte de remplacement" onChange={(e) => annonceChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-input-label">Lien de redirection</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="siteweb">www.</span>
                                </div>
                                <input type="text" id="siteweb" name="siteweb" className="form-control" placeholder="siteweb" aria-label="siteweb" aria-describedby="siteweb"  onChange={(e) => annonceChange(e)} />
                            </div>
                        </div>
                        <hr />
                    </form>
                        <BtnSubmit condition={previewB} btnAction={ showAnnonce } page={page}  />
                </div>
            </div>
        );
    }

export default AnnonceurPubBanner;
