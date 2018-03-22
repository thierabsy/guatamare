import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adsnavitems } from '../../data/adsnavitems';

let AdsNavItems = ({ap})=>  adsnavitems.map((item, index) => {
    let col = item.color;
    return(
        <div key={index} className={ ap === item.name ? "oneitem list-group-item activeNav" : "oneitem list-group-item"} style={{borderLeft:"10px solid" + col }}>
            <NavLink to={`?action=${item.name}`}><i className={`fas fa-${item.icon}`} ></i> {item.name} </NavLink>
        </div>
    )  
})

const AnnonceurNav = ({activepage}) => {
        return (
            <div className="auteurcard">
                <div className="list-group ads">
                   <AdsNavItems ap={activepage} />
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

export default AnnonceurNav;