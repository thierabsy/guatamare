import React from 'react';
import Smiler from '../Smiler';
import OutilsSubnav from './OutilsSubnav';
import OutilsVideos from './OutilsVideos';


const AnnonceurPub = ({ subcategorie, page, actiontype}) => {
        return (
            <div className="pubs">
                <OutilsSubnav
                    tp={page} 
                    subcat={subcategorie} 
                    actiontype={actiontype} 
                />
                {
                    subcategorie === "Vidéos" ?
                        <OutilsVideos 
                            actiontype={actiontype}  
                        /> :
                    <Smiler>
                        <i className="fas fa-coffee" />
                    </Smiler>
                }
            </div>
        );
    }

export default AnnonceurPub;
