import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { autnavitems } from '../../data/autnavitems';
import { adsnavitems } from '../../data/adsnavitems';

let AutNavItems = ({ap})=>  autnavitems.map((item, index) => {
                            let col = item.color;
                            return(
                                // <div className="oneitem list-group-item" style={{background: col }} >
                                <div key={index} className={ ap === item.name ? "oneitem list-group-item activeNav" : "oneitem list-group-item"} style={{borderLeft:"10px solid" + col }}>
                                    <NavLink to={`?action=${item.name}`}><i className={`fas fa-${item.icon}`} ></i> {item.name} </NavLink>
                                </div>
                            )  
                        })

const AuteurNav = ({activepage}) => {

        return (
            <div className="auteurcard">
                <div className="list-group auteur">
                   <AutNavItems ap={activepage} />
                </div>
                <hr />
                <div className="allersite a2">
                    <Link to="../" target="_blank" >
                        <span>GUATAMARE</span> <br />
                        <img src={`${urlPath}/img/logo.png`} /> <br />
                        <span>Aller au site</span>
                    </Link>
                </div>
            </div>
        );
    }

export default AuteurNav;
