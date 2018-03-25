import React from 'react';
import { NavLink } from 'react-router-dom';

const OutilsNav = ({actiontype}) => {
        return (
            <div className="list-group outils">
                <div className="list-group-item outils" style={{borderLeft: "10px solid teal"}}>
                    <NavLink to={`?${actiontype}=Outils`}><i className="fas fa-coffee"></i> Outils </NavLink> 
                </div>
            </div>
        );
    }

export default OutilsNav;
