import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobaslStyled from './styles/global'
import Header from './components/header';
import Routes from './routes'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobaslStyled/>
      <ToastContainer draggable={true} position={"top-right"}/>
      <BrowserRouter>
      <Header/>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
