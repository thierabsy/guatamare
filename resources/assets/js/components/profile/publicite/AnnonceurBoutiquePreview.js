import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import DatePickerComponent from '../DatePickerComponent';
import BtnSubmit from '../BtnSubmit';

const AnnonceurBoutique = ({previewK, dz, mag, titreChange, dateRange, date, dateDebut, dateFin}) => {
        // let disable = previewK ? "true" : "false";
        // console.log(mag.start_date);
        
        return (
            <div className="banner">
                <div className="pubbanner" >
                    <h3>Aperçu sur votre boutique</h3> 
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 leftbody">
                                <Product dz={""} preview={""} imgClass={""} />
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <div className="row">
                                    <div className="col col-sm-6 col-md-12 leftbody">
                                        <Product dz={""} preview={""} imgClass={""} />
                                    </div>
                                    <div className="col col-sm-6 col-md-12 leftbody">
                                        <Product dz={""} preview={""} imgClass={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

export default AnnonceurBoutique;
