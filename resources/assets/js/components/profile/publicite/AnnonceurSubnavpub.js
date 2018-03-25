import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';
import { adssubnavitems } from '../../data/adssubnavitems'

let BoutiqueSubNavItems = ({ap, sn})=> {
    let sbc =  adssubnavitems.map((nav, i) =>    <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                                    <NavLink to={`?action=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                    <span>{nav.taille}</span>
                                                </div>
            ) 
    return sbc
}
const AnnonceurSubnavpub = ({tp, subcat}) => {
        return (
            <div className="subNavItems">
                <BoutiqueSubNavItems 
                    ap={tp} 
                    sn={subcat} /> 
            </div>
        );
    }

export default AnnonceurSubnavpub;
