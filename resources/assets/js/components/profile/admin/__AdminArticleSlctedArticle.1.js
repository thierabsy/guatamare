import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';
import AdminArticlePreview from './AdminArticlePreview';


let AdminArticleSlctedArticle = ({page, sltArt, annuler, spreview, showPreview, showModifier}) => {
    let selectedArticles = sltArt.map((art, i) => {
            let artId = art.id;
            let self = this;
            console.log("PAAAAAAAAAA", page, i)
            return(
                <div className="sSldtArticleCol" key={i} >
                    <div className="sSldtArticle" >
                        <div className="status" >{art.status}</div> 
                        <div className="annuler" onClick={ art => annuler(art)} >Annuler</div> 
                        <div className="sltdImg">
                            <img src={`${urlPath}/storage/auteur/${art.image}`} />
                        </div>
                        <h3 className="sltdTitre">{ art.titre }</h3>
                        <div className="btnAction" >
                            <button className="btn btn-success" >Valider</button>
                            {/* <Link to={`?Article=${art.id}`} ><button className="btn btn-info"  onClick={ () => this.showPreview()}> Aperçu</button> </Link>  */}
                        <button className="btn btn-info"  onClick={ (artId) => showPreview(artId) }>Aperçu</button>  
                        <button className="btn btn-default" onClick={ () => showModifier()} >Modifier</button>
                        </div> 
                    </div>
                    
                    { 
                        // spreview == 'Preview' && page == art.id ? <AdminArticlePreview art={art} /> : 
                        spreview == 'Preview' ? <AdminArticlePreview art={art} /> : 
                        // this.state.spreview === 'Modifier' ? <AdminArticleModifier art={art} /> : 
                        spreview == 'Modifier' ? "Modifier": 
                        <div></div>
                    }
                </div>
            )
        }
    )
    return selectedArticles
}
export default AdminArticleSlctedArticle;
