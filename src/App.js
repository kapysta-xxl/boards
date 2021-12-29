import React from 'react';
import './scss/App.scss';
import BreadCrumbs from './components/BreadCrumbs';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <BreadCrumbs />
          <Routes>
            { routes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={<Component />} />}) }
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
