import React from 'react';
import { NavLink } from 'react-router-dom';

let outilsSubNavItems = [
    {
        subname: "Vidéos"
    }
]

let OutilsSubNavItems = ({ap, sn, ac}) =>   outilsSubNavItems.map((nav, i) =>  {
                                            return (
                                                <div key={i} className={ sn === nav.subname ? "subNavItem activeSubNav" : "subNavItem"}>
                                                    <NavLink to={`?${ac}=${ap}&subcategorie=${nav.subname}`}> {nav.subname} </NavLink>
                                                </div>
                                            )
                                        })

const OutilsSubnav = ({tp, subcat, actiontype}) => {
        return (
            <div className="subNavItems">
                <OutilsSubNavItems 
                    ap={tp} 
                    sn={subcat} 
                    ac={actiontype} /> 
            </div>
        );
    }

export default OutilsSubnav;
