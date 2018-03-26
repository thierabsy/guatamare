import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';
import AdminPagesContent from './AdminPagesContent';

const AdminPages = ({type, subcategorie}) => {
        return (
            <div className="">
                <AdminPagesContent />
            </div>
        );
    }

export default AdminPages;
