import React from 'react';

import FileUpload from '../FileUpload';
import Smiler from '../Smiler';
import AnnonceurBoutiqueForm from './AnnonceurBoutiqueForm';
import AnnonceurSubnav from './AnnonceurSubnav';
import AnnonceurBoutiquePreview from './AnnonceurBoutiquePreview';

const AnnonceurBoutique = ({previewBtk1, previewBtk2, previewBtk3, dz1, dz2, dz3, btk, boutiqueChange,tp, subcat}) => {
        
    console.log("subcat: ", subcat)
    console.log("tp: ", tp)
    return (
            <div>
                <AnnonceurSubnav 
                    tp={tp}
                    sn={subcat}
                />
                {
                    subcat === "Paramétres" ?
                        <AnnonceurBoutiqueForm 
                            previewBtk1={previewBtk1}
                            previewBtk2={previewBtk2}
                            previewBtk3={previewBtk3}
                            dz1={dz1}
                            dz2={dz2}
                            dz3={dz3}
                            btk={btk}
                            boutiqueChange={boutiqueChange}
                        /> :
                    subcat === "Aperçu" ?
                        <AnnonceurBoutiquePreview 
                            btk={btk}
                        />  :
                    <Smiler>
                        <i className="fas fa-cart-plus smileicon s2" />
                    </Smiler>

                }

                {
                    previewBtk1 && 
                    <div>
                        <hr />
                        <AnnonceurSubnav 
                            tp={tp}
                            sn={subcat}
                        />
                    </div>
                }
            </div>
        );
    }

export default AnnonceurBoutique;
