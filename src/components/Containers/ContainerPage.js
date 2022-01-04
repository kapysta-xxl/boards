import React from 'react';
import BreadCrumbs from '../BreadCrumbs';

function ContainerPage({ children }) {
    return (
        <div className='container'>
            <BreadCrumbs />
            { children }
        </div>
    );
}

export default ContainerPage;