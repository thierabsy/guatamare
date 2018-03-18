import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';

let AdminNavItems = ({apg})=>  adminnavitems.map((item, index) => {
                            let col = item.color;
                            return(
                                <div key={index} className={ apg === item.name ? "oneitem list-group-item activeNav" : "oneitem list-group-item"} style={{borderLeft:"10px solid" + col }}>
                                    <NavLink to={`?type=${item.name}`}><i className={`fas fa-${item.icon}`} ></i> {item.name} </NavLink>
                                </div>
                            )  
                        })
const AdminNav = ({type}) => {

        return (
            <div className="auteurcard">
                <div className="list-group">
                   <AdminNavItems apg={type} />
                </div>
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

export default AdminNav;
