import React from 'react';

import FileUpload from '../FileUpload';
import AnnonceurSubnavpub from './AnnonceurSubnavpub';
import AnnonceurPubBanner from './AnnonceurPubBanner';
import AnnonceurPubCote from './AnnonceurPubCote';
import AnnonceurPubCover from './AnnonceurPubCover';
import Auteuralertes from '../auteur/Auteuralertes';
import Smiler from '../Smiler';

const AnnonceurPub = ({previewBanner, previewCote, previewCover, subcategorie, page, dz, dzbanner, dzcote, dzcover, annonceChange, annonce, showAnnonce, apercuAnnonce, postPubAnnonce}) => {
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
                            annonceChange={annonceChange} 
                            showAnnonce={showAnnonce} 
                        /> :
                    subcategorie === "Côté" ?
                        <AnnonceurPubCote 
                            previewC={previewCote}
                            dz={dzcote} 
                            annonceChange={annonceChange} 
                            showAnnonce={showAnnonce} 
                        /> :
                    subcategorie === "Couverture" ?
                        <AnnonceurPubCover 
                            previewCv={previewCover}
                            dz={dzcover} 
                            annonceChange={annonceChange} 
                            showAnnonce={showAnnonce} 
                        /> :
                        <Smiler>
                            <i className="fab fa-fly smileicon si2" />
                            <h5> Choisissez une des catégories ci-dessus</h5>
                        </Smiler>
                }
                {
                    apercuAnnonce && 
                    <div>
                    <hr />
                    <div className="annonceapercu">
                    <h5 className="text-center" style={{padding: "5px", background:"gainsboro", margin: "5px 10px"}}><strong> Récapitulatif de votre annonce </strong></h5>
                    <div className="row" style={{padding: "10px", background:"gainsboro", margin: "0 10px"}}>     
                        <div className="col col-sm-12 col-md-5 text-center" style={{borderRight: "1px solid darkgray"}} >
                            <img src={ annonce.img.preview } style={{width: "100%"}} />
                            <hr />
                            <p><strong>Taille de l'image: </strong> { annonce.type === "Couverture" ? "(1130x200px)" : annonce.type === "Bannière" ? "(780x120)" : "(310x200)" } </p>
                        </div>
                        <div className="col col-sm-12 col-md-7">
                            <p style={{ borderBottom: "1px dotted darkgray" }} >
                                <strong>Annonceur: </strong> <br /> { annonce.user_id }
                            </p>
                            <p style={{ borderBottom: "1px dotted darkgray" }}>
                                <strong>Type d'annonce: </strong> <br /> { annonce.type } 
                            </p>
                            <p style={{ borderBottom: "1px dotted darkgray" }}>
                                <strong>Text alternatif de l'image: </strong> <br /> { annonce.alttext }
                            </p>
                            <p style={{ borderBottom: "1px dotted darkgray" }}>
                                <strong>Site de redirection: </strong> <br /> { annonce.siteweb && "www."+annonce.siteweb }
                            </p>
                            <button className="btn btn-info" onClick={() => {postPubAnnonce(); showAnnonce()}}  >ENVOYER</button>
                        </div>
                    </div>
                    </div>
                </div>
                }
                
            </div>
        );
    }

export default AnnonceurPub;
