import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';

let AdminNavItems = ({ap, sn})=>  adminnavitems.map((item, index) => {
                            console.log(item.subnav)
                            let snSubnav = item.subnav.map((nav, i) => {
                                return(
                                    <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                        <NavLink to={`?type=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                    </div>
                                ) 
                            })
                            let toreturn = item.name === ap ? snSubnav : <div></div>
                            return toreturn
                             
                        })
const AdminSubnav = ({sbnav, sbcat}) => {
        return (
            <div className="subNavItems">
                <AdminNavItems ap={sbnav} sn={sbcat} /> 
            </div>
        );
    }

export default AdminSubnav;
