import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adssubnavitems } from '../../data/adssubnavitems';

let AnnonceurSubNavItems = ({ap, sn})=> {
    let sbc = adssubnavitems.map((nav, i) =>    <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                                    <NavLink to={`?action=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                    { sn === nav.subname && <span>Taille: { nav.taille } </span>}
                                                </div>
            ) 
    return sbc
}
const AnnonceurSubnav = ({tp, subcat}) => {
        return (
            <div className="subNavItems">
                <AnnonceurSubNavItems ap={tp} sn={subcat} /> 
            </div>
        );
    }

export default AnnonceurSubnav;
