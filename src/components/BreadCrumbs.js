import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../scss/breadcrumb.scss';

function BreadCrumbs() {
    const [crumbs, setCrumbs] = useState(['issue Boards'])
    const location = useLocation()

    useEffect(() => {console.log(location.pathname)}, [location])

    return (
        <div className='breadcrumbs'>
            <Link className='breadcrumbs__link' to="/">issue Boards</Link>
            <Link className='breadcrumbs__link' to="/todo/4653">#4653 FC-13</Link>
        </div>
    );
}

export default BreadCrumbs;