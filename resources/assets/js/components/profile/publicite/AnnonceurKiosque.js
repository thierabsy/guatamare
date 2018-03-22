import React from 'react';

import FileUpload from '../FileUpload';

// let magPreview = (
        
//     )

const AnnonceurKiosque = ({previewK, dz}) => {
        return (
            <div className="banner">
                <div className="pubbanner" >
                    <h3>Annonce en haut (Bannière large)</h3> 
                    <h5 style={{marginBottom:"0px", marginTop: "10px" }} >Choisir Image</h5> 
                    <span className="taille" >(Taille: 250x300)</span>
                    <form action="">
                        <FileUpload dz={dz}>
                            <span className="imgchoice" > <i className="fas fa-upload" /> {previewK ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                        </FileUpload>
                        { previewK && <hr />}
                        { previewK && (
                            <div className=" mag" style={{width: "373px"}} >
                                <div className="maginnerwrapper">
                                    <h4 className="magTitle"><i className="fas fa-bookmark mensuel" ></i> Mensuel </h4>
                                    <div className="imgwrapper">
                                        <img src={previewK} className="imgMag" />
                                        <span className="mois" >Prix: 1200 FCFA</span>
                                    </div>
                                    <span></span>
                                    <div className="magText">
                                        <div className="details"><span className="span1">Editeur</span>  <span className="span2"> Média </span></div>
                                        <div className="details"><span className="span1">Période</span> <span className="span2">@ {}<br/>@ {}</span></div>
                                        <div className="details"><span className="span1">Détails</span><a href="" target="_blank"><span className="span2">Info <i className="fas fa-info-circle"></i> </span></a> </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        { previewK && <hr />}
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
                        <div className="btnWrapper">
                            <button type="submit" className="btn btn-success"><i className="fab fa-telegram-plane" /> Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

export default AnnonceurKiosque;
