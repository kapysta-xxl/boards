import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { routes } from '../utils/routes';
import '../scss/breadcrumb.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function BreadCrumbs() {
    const [crumbs, setCrumbs] = useState('')
    const { pathname } = useLocation()
    const params = useParams()

    
    useEffect(() => {
        
        let route = routes.find(n => n.path === pathname.replace(params.id, ':id'));
        
        if(!route) return;
        
        let pathNames = route.path.split('/').slice(1).filter(n => n !== ':id');

        let newCrumbs = [];
        for(let i = 0, linkRoutes = routes; i < pathNames.length; i++){
            let item = linkRoutes.find(n => n.path.split('/').includes(pathNames[i]))
            if(item) newCrumbs.push(item);
        }

        setCrumbs(newCrumbs)
    }, [pathname, params])

    return (
        <Breadcrumbs className='breadcrumbs' separator="›" aria-label="breadcrumb">
            { crumbs.length && crumbs.map(({ path, title }, index) => {
                if(title === 'issue') title = `#${params.id} issue`;
                return (
                    <Link 
                    className='breadcrumbs__link' 
                    key={path} 
                    to={ index === routes.length - 1 ? '' : path}
                    >
                    {title}
                    </Link>
                )
            }) }
        </Breadcrumbs>
    );
}

export default BreadCrumbs;