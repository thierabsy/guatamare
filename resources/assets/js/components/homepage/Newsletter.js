import React from 'react';
import { urlPath } from '../path';

const Newsletter = () => {
        return (
            <div className="newsletter">
                <div className="row" >
                    <div className="col col-md-9" >
                        <div className="nlmain">
                            <h4>Inscrivez-vous à notre newsletter</h4>
                            <form inline="true" >
                                <input type="text" placeholder="Entrer votre e-mail"/>
                                <button type="submit">S'Inscrire</button>
                            </form>
                            <p>Recevez dans votre boite les meilleurs articles et offres des partenaires</p>
                        </div>
                    </div>
                    <div className="col col-md-3" >
                        <div className="nlside">
                            <p>Prochain Panel (10-04-18)</p>
                            <h5> &laquo; Le Sénégal en voix d'émergence &raquo; </h5>
                            <h6> --- Intervenants ---</h6>
                            <img src={`${ urlPath }/img/paneliste4.jpg`}  title="Paneliste 1" />
                            <img src={`${ urlPath }/img/paneliste6.jpg`}  title="Paneliste 2" />
                            <img src={`${ urlPath }/img/paneliste9.jpg`}  title="Paneliste 3" /> <br />
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Newsletter;
