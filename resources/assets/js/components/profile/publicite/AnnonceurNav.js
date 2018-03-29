import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adsnavitems } from '../../data/adsnavitems';
import OutilsNav from '../outils/OutilsNav';

let AdsNavItems = ({ap})=>  adsnavitems.map((item, index) => {
    let col = item.color;
    return(
        <div key={index} className={ ap === item.name ? "oneitem list-group-item activeNav" : "oneitem list-group-item"} style={{borderLeft:"10px solid" + col }}>
            <NavLink to={`?action=${item.name}`}><i className={`fas fa-${item.icon}`} ></i> {item.name} </NavLink>
        </div>
    )  
})

const AnnonceurNav = ({activepage, actiontype}) => {
        return (
            <div className="auteurcard">
                <div className="list-group auteur">
                    <div className={ activepage === "Messages" ? "oneitem list-group-item activeNav disabled" : "oneitem list-group-item disabled"} style={{borderLeft:"10px solid #4e626c" }}>
                        <NavLink to="?action=Messages"><i className="fas fa-envelope" ></i> Messages <span class="badge badge-info">0</span> </NavLink>
                    </div>
                </div>
                <hr />
                <div className="list-group ads">
                   <AdsNavItems ap={activepage} />
                </div>
                <hr />
                <OutilsNav
                    actiontype={actiontype}
                />
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
