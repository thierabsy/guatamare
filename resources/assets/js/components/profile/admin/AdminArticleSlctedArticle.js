import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';
import AdminArticlePreview from './AdminArticlePreview';
import AdminArticleModifier from './AdminArticleModifier';

let AdminArticleSlctedArticle = ({sltArt, annuler, titreChange, getbd, dz, preview, fermer, confirm, fermeBtn, spreview, showPreview, showModifier, updateAuteurArticle}) => {
            return(
                <div className="sSldtArticleCol">
                    <div className="sSldtArticle" >
                        <div className="status" >{sltArt.status}</div> 
                        <div className="annulerFermer" onClick={ () => annuler()} >Annuler</div> 
                        <div className="sltdImg">
                            <img src={`${urlPath}/storage/auteur/${sltArt.image}`} />
                        </div>
                        <h3 className="sltdTitre">{ sltArt.titre }</h3>
                        <div className="btnAction" >
                            <button className="btn btn-success" onClick={ () => confirm() }>Valider</button>
                            {/* <Link to={`?Article=${art.id}`} ><button className="btn btn-info"  onClick={ () => this.showPreview()}> Aperçu</button> </Link>  */}
                        <button className="btn btn-info"  onClick={ () => showPreview() }>Aperçu</button>
                        <button className="btn btn-default" onClick={ () => showModifier()} >Modifier</button>
                        </div> 
                    </div>
                    <div className="optionWrapper">
                        { 
                            spreview === 'Preview' ? 
                                <AdminArticlePreview 
                                    art={sltArt} 
                                    fermer={fermer} 
                                /> : 
                            spreview === 'Modifier' ? 
                                <AdminArticleModifier 
                                    titreChange={titreChange} 
                                    fermer={fermer} 
                                    getbd={getbd} 
                                    dz={dz} 
                                    preview={preview} 
                                    art={sltArt} 
                                /> : 
                            <div></div>
                        }
                    </div>
                </div>
            )
}
export default AdminArticleSlctedArticle;
