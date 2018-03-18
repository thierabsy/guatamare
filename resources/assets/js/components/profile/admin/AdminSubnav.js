import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';

let AdminNavItems = ({ap, sn})=> {
    let subnavpage = adminnavitems.filter(a => a.name === ap);
    console.log(subnavpage)
    console.log(subnavpage.length)
    let sbc = subnavpage[0] ? subnavpage[0].subnav.map((nav, i) =>  <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                                        <NavLink to={`?type=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                    </div>
            ) : <div></div>
    return sbc
}
const AdminSubnav = ({tp, subcat}) => {
        return (
            <div className="subNavItems">
                <AdminNavItems ap={tp} sn={subcat} /> 
            </div>
        );
    }

export default AdminSubnav;
