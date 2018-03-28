import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';

let AdminNavItems = ({ap, sn, cs})=> {
    let subnavpage = adminnavitems.filter(a => a.name === ap);
    let sbc = subnavpage[0] ? subnavpage[0].subnav.map((nav, i) =>  <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}  onClick={()=> cs()} >
                                                        <NavLink to={`?type=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                    </div>
            ) : <div></div>
    return sbc
}
const AdminSubnav = ({tp, subcat, clickSet, clickUnset}) => {
        return (
            <div className="subNavItems">
                {
                    tp !== "Outils" && 
                    <div 
                        className={ subcat === undefined ? "subNavItem activeSubNav" : "subNavItem"}
                        onClick={()=> clickUnset()}
                    >
                        <NavLink to={`?type=${tp}`}> Tous </NavLink>
                    </div>
                }
                <AdminNavItems ap={tp} sn={subcat} cs={clickSet} /> 
            </div>
        );
    }

export default AdminSubnav;
