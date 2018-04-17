import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Pages from './pages/Pages';
import Kiosque from './pages/Kiosque';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Singlearticle from './pages/Singlearticle'; 
import Auteur from './profile/Auteur';
import Admin from './profile/Admin';
import Publicite from './profile/Publicite';

const Myroutes = ()=>{
    return (
        <div>
            <BrowserRouter >
                <div>
                    <div className="topbar" />
                    <Route exact={true} path="/auteur" component={ Auteur } />
                    <Route path="/admin" component={ Admin } />
                    <Route path="/publicite" component={ Publicite } />
                    <Route exact={true} path="/" component={Homepage} />
                    <Route path="/kiosque" component={Kiosque} />
                    <Route path="/categorie/:pages/:article" component={Singlearticle} />
                    <Route exact={true} path="/categorie/:pages" component={Pages} />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Myroutes;


