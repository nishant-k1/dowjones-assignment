import React from 'react';
import './App.css';
import Header from 'views/layouts/Header';
import Footer from 'views/layouts/Footer';
import { footerDetails } from 'views/utils/constants';
import { routesConfig } from './views/routes/index';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(routesConfig);

  return (
    <React.Fragment>
      <Header />
      {element}
      <Footer details={footerDetails} />
    </React.Fragment>
  );
}

export default App;
