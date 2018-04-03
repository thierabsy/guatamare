import React from 'react';

import FileUpload from '../FileUpload';
import AnnonceurSubnavpub from './AnnonceurSubnavpub';
import AnnonceurPubBanner from './AnnonceurPubBanner';
import AnnonceurPubCote from './AnnonceurPubCote';
import AnnonceurPubCover from './AnnonceurPubCover';
import Auteuralertes from '../auteur/Auteuralertes';
import Smiler from '../Smiler';

const AnnonceurPub = ({previewBanner, previewCote, previewCover, subcategorie, page, dz, dzbanner, dzcote, dzcover}) => {
        return (
            <div className="pubs">
                <AnnonceurSubnavpub 
                    tp={page} 
                    subcat={subcategorie} 
                />
                {
                    subcategorie === "Bannière" ?
                        <AnnonceurPubBanner 
                            previewB={previewBanner} 
                            dz={dzbanner}
                        /> :
                    subcategorie === "Côté" ?
                        <AnnonceurPubCote 
                             previewC={previewCote}
                            dz={dzcote} 
                        /> :
                    subcategorie === "Couverture" ?
                        <AnnonceurPubCover 
                            previewCv={previewCover}
                            dz={dzcover} 
                        /> :
                        <Smiler>
                            <i className="fab fa-fly smileicon si2" />
                            <h5> Choisissez une des catégories ci-dessus</h5>
                        </Smiler>
                }
            </div>
        );
    }

export default AnnonceurPub;
