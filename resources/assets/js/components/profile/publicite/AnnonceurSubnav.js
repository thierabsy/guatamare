import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

let btksubnavitems = [
    {
        subname: "Paramétres"
    },
    {
        subname: "Aperçu"
    }
]

let BoutiqueSubNavItems = ({ap, sn})=> {
    let sbc = btksubnavitems.map((nav, i) =>    <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                                    <NavLink to={`?action=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                </div>
            ) 
    return sbc
}
const AnnonceurSubnav = ({tp, sn}) => {
        return (
            <div className="subNavItems">
                <BoutiqueSubNavItems 
                    ap={tp} 
                    sn={sn} /> 
            </div>
        );
    }

export default AnnonceurSubnav;
