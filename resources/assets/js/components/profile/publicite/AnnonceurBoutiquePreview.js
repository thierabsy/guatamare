import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import DatePickerComponent from '../DatePickerComponent';
import BtnSubmit from '../BtnSubmit';
import { urlPath } from '../../path';

const AnnonceurBoutiquePreview = ({btk}) => {
        let btkproduits = btk.produits.split(",");
        let produits = btkproduits.map((produit, i) => <span key={i} className="produit"> { produit } </span>)
        return (
            <div className="banner">
                <div className="pubbanner boutiquewrapper btkpreview" >
                    <div className="btkwelcome">
                        <img src={`${urlPath}/img/welcome1.png`} />
                    </div>
                    <div className="row">
                        <div className="col col-sm-12 col-md-8">
                            <div  className="btkleft">
                                <div className="row">
                                    <div className="col col-sm-12 col-md-6">
                                        { btk.image1 && <img src={ btk.image1.preview } className="img img1" />}
                                    </div>
                                    <div className="col col-sm-12 col-md-6">
                                        <div className="row">
                                            <div className="col col-sm-6 col-md-12">
                                                { btk.image2 && <img src={ btk.image2.preview } className="img img2" />}
                                            </div>
                                            <div className="col col-sm-6 col-md-12">
                                                { btk.image3 && <img src={ btk.image3.preview } className="img img2" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-4">
                            {
                                btk.nom &&
                                <div className="btkright">
                                    <div className="list-group">
                                        <div className="list-group-item logoitem">
                                            <img src={`${urlPath}/img/logo.png`} className="logo" />
                                        </div>
                                        <div className="list-group-item">
                                            <h5>{ btk.nom }</h5>
                                        </div>
                                        <div className="list-group-item lgiflex">
                                            <div className="lgileft">
                                                Adresse:
                                            </div>
                                            <div className="lgiright">
                                                { btk.adresse }
                                            </div>
                                        </div>
                                        <div className="list-group-item lgiflex">
                                            <div className="lgileft">
                                                Téléphone:
                                            </div>
                                            <div className="lgiright">
                                                { btk.telephone }
                                            </div>
                                        </div>
                                        <div className="list-group-item lgiflex">
                                            <div className="lgileft">
                                                E-mail:
                                            </div>
                                            <div className="lgiright">
                                                { btk.email }
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <h5>Nos Produits/Services</h5>
                                        </div>
                                        <div className="list-group-item produits">
                                            { produits }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default AnnonceurBoutiquePreview;
