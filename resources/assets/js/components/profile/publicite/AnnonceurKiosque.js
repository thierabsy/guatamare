import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import DatePickerComponent from '../DatePickerComponent';
import BtnSubmit from '../BtnSubmit';

// let magPreview = (
        
//     )

const AnnonceurKiosque = ({previewK, dz, mag, titreChange, dateRange, date, dateDebut, dateFin}) => {
        // let disable = previewK ? "true" : "false";
        // console.log(mag.start_date);
        
        return (
            <div className="banner">
                <div className="pubbanner" >
                    <h3>Entrez les informations sur votre parution</h3> 
                    <form action="">
                        <div className="row">
                            <div className="col col-sm-12 col-md-6">
                                <h5 style={{marginBottom:"0px", marginTop: "10px", fontWeight: "bold" }} >Choisir Image</h5> 
                                <span className="taille" >(Taille: 250x300)</span>
                                <FileUpload dz={dz}>
                                    <span className="imgchoice" > <i className="fas fa-upload" /> {previewK ? "Changer l'image" : "Choisir une image ou Glisser et déposer ici"} </span>
                                </FileUpload>
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="nom" style={{marginTop: "10px" }}>Nom du magazine</label>
                                    <input 
                                        type="text" 
                                        id="nom" 
                                        name="nom"
                                        className="form-control alttext" 
                                        placeholder="Le nom de votre magazine..."
                                        onChange={ (e) => titreChange(e) }
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="editeur">Editeur du magazine</label>
                                    <input 
                                        type="text" 
                                        id="editeur" 
                                        name="editeur"
                                        className="form-control alttext" 
                                        placeholder="Le editeur du magazine..."
                                        onChange={ (e) => titreChange(e) }
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="prix" > Prix </label>
                                    <input 
                                        type="number" 
                                        id="prix" 
                                        name="prix"
                                        className="form-control alttext" 
                                        placeholder="Prix de vente...." 
                                        onChange={ (e) => titreChange(e) }
                                    />
                                </div>
                                {/* <DatePicker 
                                    mag={mag}
                                    dateRange={dateRange}
                                /> */}
                                
                                <label className="form-input-label">Période</label>
                                <div className="row">
                                    <div className="col col-sm-6">
                                        <div className="form-group" style={{display: "flex"}} >
                                            <label className="form-input-label">Entre</label>
                                            <DatePickerComponent 
                                                mag={mag}
                                                dateRange={dateDebut}
                                                date={date.start_date}
                                                id={"start_id"}
                                                cn={"start_cn"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col col-sm-6">
                                        <div className="form-group" style={{display: "flex"}} >
                                            <label className="form-input-label">Et</label>
                                            <DatePickerComponent 
                                                mag={mag}
                                                dateRange={dateFin}
                                                date={date.end_date}
                                                id={"end_id"}
                                                cn={"end_cn"}
                                            />
                                        </div>
                                    </div>
                                </div>
                               <div className="form-group">
                                    <label className="form-input-label" htmlFor="alttext">Texte alternatif à l'image</label>
                                    <input type="text" id="alttext" name="altext" className="alttext form-control" placeholder="Texte de remplacement" />
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
                            </div>
                            <div className="col col-sm-12 col-md-6 leftbody">
                                { previewK ? 
                                    <div className=" mag" style={{width: "373px"}} >
                                        <div className="maginnerwrapper">
                                            <h4 className="magTitle"><i className="fas fa-bookmark mensuel" ></i> { mag.nom } </h4>
                                            <div className="imgwrapper">
                                                <img src={previewK} className="imgMag" />
                                                <span className="mois" >Prix: { mag.prix } FCFA</span>
                                            </div>
                                            <span></span>
                                            <div className="magText">
                                                <div className="details"><span className="span1">Editeur</span>  <span className="span2"> { mag.editeur } </span></div>
                                                <div className="details"><span className="span1">Période</span> <span className="span2">@ { mag.periode_start }<br/>@ { mag.periode_end }</span></div>
                                                <div className="details"><span className="span1">Détails</span><a href="www.google.com" target="_blank"><span className="span2">Info <i className="fas fa-info-circle"></i> </span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <Smiler>
                                        <i className="fas fa-golf-ball smileicon si2" /> <br />
                                        <i className="fas fa-newspaper smileicon" />
                                    </Smiler>
                                }
                            </div>
                            
                        </div>
                        <hr />
                        <BtnSubmit condition={previewK} />
                    </form>
                </div>
            </div>
        );
    }

export default AnnonceurKiosque;
