import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';
import AdminArticlePreview from './AdminArticlePreview';
import AdminArticleModifier from './AdminArticleModifier';
import AdminPublicitePreview from './AdminPublicitePreview';

let AdminAnnonceSelected = ({sltArt, annuler, titreChange, getbd, dz, preview, fermer, confirm, fermeBtn, spreview, showPreview, showModifier, updateAuteurArticle}) => {
            return(
                <div className="sSldtArticleCol">
                    <div className="sSldtArticle" >
                        <div className="status" >{sltArt.status}</div> 
                        <div className="annulerFermer" onClick={ () => annuler()} >Annuler</div> 
                        <div className="sltdImg">
                            <img src={`${urlPath}/storage/publicite/${sltArt.img}`} style={{display: "block !important"}} />
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item"><span><b>Type: </b></span> { sltArt.type }</li>
                            <li className="list-group-item"><span><b>Annonceur: </b></span> { sltArt.user_id }</li>
                            <li className="list-group-item"><span><b>Status: </b></span> { sltArt.status }</li>
                            <li className="list-group-item"><span><b>Alt Text: </b></span> { sltArt.alttext }</li>
                            <li className="list-group-item"><span><b>Date: </b></span> { sltArt.updated_at }</li>
                        </ul>
                        <div className="btnAction" >
                            <button className="btn btn-success" onClick={ () => confirm() }>Valider</button>
                            {/* <Link to={`?Article=${art.id}`} ><button className="btn btn-info"  onClick={ () => this.showPreview()}> Aperçu</button> </Link>  */}
                        <button className="btn btn-info"  onClick={ () => showPreview() }>Aperçu / Modifier</button>
                        {/* <button className="btn btn-default" onClick={ () => showModifier()} >Modifier</button> */}
                        </div> 
                    </div>
                    <div className="optionWrapper">
                        { 
                            spreview === 'Preview' ? 
                                <AdminPublicitePreview 
                                    annonceChange={titreChange} 
                                    fermer={fermer} 
                                    dz={dz} 
                                    previewB={preview} 
                                    art={sltArt} 
                                /> : 
                            <div></div>
                        }
                    </div>
                </div>
            )
}
export default AdminAnnonceSelected;
