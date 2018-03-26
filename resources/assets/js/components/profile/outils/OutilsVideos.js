import React from 'react';

import { outilsvideos } from "../../data/outilsvideos";
import OutilsSubnav from './OutilsSubnav';


let video = outilsvideos.map((video, i) =>{
                return(
                    <div key={i} className="singlevideo">
                        <h4> { video.title } </h4>
                        <p> { video.description } </p>
                        <div className="videowrapper" id="videowrapper">
                            <iframe 
                                // width="560" 
                                // height="315" 
                                src={ `https://www.youtube.com/embed/${video.video_id}` }
                                frameBorder="0" 
                                allow="autoplay; encrypted-media" 
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                    </div>
                );
            })    

const OutilsVideos = () => {
        return (
            <div className="outilsvideos">
                { video }
            </div>
        );
    }

export default OutilsVideos;
