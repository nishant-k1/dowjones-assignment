import React from 'react';
import './App.css';
import Header from 'views/layouts/Header';
import Footer from 'views/layouts/Footer';
import { footerDetails } from 'views/utils/constants';
import { useRoutesConfig } from './views/routes/index';

function App() {
  return (
    <React.Fragment>
      <Header />
      {useRoutesConfig()}
      <Footer details={footerDetails} />
    </React.Fragment>
  );
}

export default App;
