import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import DatePickerComponent from '../DatePickerComponent';
import BtnSubmit from '../BtnSubmit';

let Product = ({dz, preview, imgClass, taille})=>{
    return (
        <div> 
            <FileUpload dz={dz}>
                { preview &&    <span className="imgchoice btk" > 
                                    <i className="fas fa-upload" /> Changer l'image
                                </span>
                } 
                { preview ? 
                    <img src={preview} className={imgClass} />
                :
                    <div className="sinon" >
                        <i className="fas fa-image smileicon" /> <br />
                        <span className="imgchoice btk" > 
                            <i className="fas fa-upload" /> Choisir une image ou Glisser et déposer ici 
                        </span> <br />
                        <span className="taille" >(Taille: {taille})</span>
                    </div>
                }
            </FileUpload>
        </div>
    )
}

const AnnonceurBoutiqueForm = ({previewBtk1, previewBtk2, previewBtk3, dz1, dz2, dz3, btk, boutiqueChange}) => {
        // let disable = previewK ? "true" : "false";
        // console.log(mag.start_date);
        
        return (
            <div className="banner">
                <div className="pubbanner boutiquewrapper" >
                    <h3>Entrez les informations sur votre boutique</h3> 
                    <form action="">
                        <div className="row">
                            <div className="col col-sm-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="nom">Nom de votre boutique</label>
                                    <input 
                                        type="text" 
                                        id="nom" 
                                        name="nom"
                                        className="form-control alttext" 
                                        placeholder="Le nom de votre boutique..."
                                        onChange={ (e) => boutiqueChange(e) }
                                        value={ btk.nom }
                                    />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-5">
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="adresse" >Adresse</label>
                                    <input 
                                        type="text" 
                                        id="adresse" 
                                        name="adresse"
                                        className="form-control alttext" 
                                        placeholder="Emplacement ..."
                                        onChange={ (e) => boutiqueChange(e) }
                                        value={ btk.adresse }
                                    />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-3">
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="telephone">Ville</label>
                                    <input 
                                        type="text" 
                                        id="ville" 
                                        name="ville"
                                        className="form-control alttext" 
                                        placeholder="Lieu"
                                        onChange={ (e) => boutiqueChange(e) }
                                        value={ btk.ville }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="email">Adresse e-mail</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        name="email"
                                        className="form-control alttext" 
                                        placeholder="info@monsite.net"
                                        onChange={ (e) => boutiqueChange(e) }
                                        value={ btk.email }
                                    />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label className="form-input-label" htmlFor="telephone" >Téléphone</label>
                                    <input 
                                        type="text" 
                                        id="telephone" 
                                        name="telephone"
                                        className="form-control alttext" 
                                        placeholder="33 800 00 00 - 7x 000 00 00"
                                        onChange={ (e) => boutiqueChange(e) }
                                        value={ btk.telephone }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-input-label" htmlFor="produits">Vos Produits et Services (séparés par une virgule)</label>
                            <input 
                                type="text" 
                                id="produits" 
                                name="produits"
                                className="form-control alttext" 
                                placeholder="vente, commerce, negoce, produits, service"
                                onChange={ (e) => boutiqueChange(e) }
                                value={ btk.produits }
                            />
                        </div>
                        <div className="row leftbodybtk">
                            <div className="col col-sm-12 col-md-6">
                                <div className="leftbody lb1">
                                    <Product dz={dz1} preview={previewBtk1} imgClass={"btk btk1"} taille={"370x510"} />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <div className="row">
                                    <div className="col col-sm-6 col-md-12 colimg2">
                                        <div className="leftbody lb2">
                                            <Product dz={dz2} preview={previewBtk2} imgClass={"btk btk2"} taille={"370x245"} />
                                        </div>
                                    </div>
                                    <div className="col col-sm-6 col-md-12">
                                        <div className="leftbody lb3">
                                            <Product dz={dz3} preview={previewBtk3} imgClass={"btk btk2"} taille={"370x245"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <BtnSubmit condition={previewBtk1 && previewBtk2 && previewBtk3} />
                    </form>
                </div>
            </div>
        );
    }

export default AnnonceurBoutiqueForm;
