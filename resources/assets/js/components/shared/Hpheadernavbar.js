import React from 'react';
import { Link } from 'react-router-dom';

import { navbarItems } from '../data/navbar';

let navbar  = navbarItems.map((nb, index)=> {
    const col = nb.color;
    return(
        <li className="nav-item" key={index} >
            <Link to={ nb.name == "Accueil" ? "/" : "/categorie/"+nb.link} className="nav-link" style={{color: col}} href={nb.link}>{ nb.name == "Boutique" ? <i className="fas fa-shopping-cart"></i> : "" } { nb.name } <span className="sr-only">(current)</span></Link>
        </li>
    );
});

const Hpheadernavbar = () => {
        return (
            <div className="">
                <div className="row">
                    <nav className="navbar navbar-expand-md">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                { navbar }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

export default Hpheadernavbar;
