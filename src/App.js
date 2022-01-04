import React from 'react';
import './scss/App.scss';
import ContainerPage from './components/Containers/ContainerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          { routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<ContainerPage children={ <Component /> } />} />}) }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
