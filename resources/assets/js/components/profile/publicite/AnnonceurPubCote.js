import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import BtnSubmit from '../BtnSubmit';


const AnnonceurPubCote = ({previewC, dz, annonceChange, showAnnonce}) => {
        return (
            <div className="pubs">
                <div className="pubcote" >
                    <h3 style={{textAlign: "center", fontWeight:"bold"}} >Annonce sur les côtés</h3> 
                    <form action="">
                    <div className="row">
                        <div className="col col-sm-12 col-md-6"> 
                            <h5 style={{marginBottom:"0px", marginTop: "10px", fontWeight:"bold" }} >Choisir Image</h5> 
                            <span className="taille" >(Taille: 350x190)</span>
                            
                                <FileUpload dz={dz} onChange={(e) => annonceChange(e)}>
                                    <span className="imgchoice" > <i className="fas fa-upload" /> {previewC ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                                </FileUpload>
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
                                
                        </div>
                        <div className="col col-sm-12 col-md-6 leftbody">
                            { previewC ? 
                                    <img src={previewC} className="imgCote" />
                                :
                                <Smiler>
                                    <i className="fas fa-golf-ball smileicon si2 pubcote" /> 
                                </Smiler>
                        
                            }
                        </div>
                    </div>
                    <hr />
                </form>
                    <BtnSubmit condition={previewC}  btnAction={ showAnnonce }/>
                </div>
            </div>
        );
    }

export default AnnonceurPubCote;
