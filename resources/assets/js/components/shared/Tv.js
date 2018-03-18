import React from 'react';

const Tv = () => {
        return (
            <div className="tv">
                            <h5>Guaatamaare TV</h5>
                            <div className="vtop">
                                <iframe 
                                    width="100%" height="150" 
                                    src="https://www.youtube.com/embed/SN7sncKzRq4?rel=0&amp;controls=0&amp;showinfo=0" 
                                    frameBorder="0" 
                                    allow="autoplay; encrypted-media" allowFullScreen={true}></iframe>
                            </div>
                            <div className="vlist">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Interview Macky Sall</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Entretien Dr Seye</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Emission du Jeudi</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Les Ecos</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Revue de Presse</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Emission du Jeudi</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Les Ecos</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-video"></i> Revue de Presse</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
        );
    }

export default Tv;
