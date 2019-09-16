import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobaslStyled from './styles/global'
import Header from './components/header';
import Routes from './routes'

function App() {
  return (
    <>
      <GlobaslStyled/>
      
      <BrowserRouter>
      <Header/>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
