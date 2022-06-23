import React from 'react';

import Navbar from './components/Navbar';
import rasm from "./img/logo.svg"

import Main from './components/Main';
import rasm1 from './img/rasm1.png'

import Container from './components/Container';
import MainContent from './components/MainContent';

import rasm2 from "./img/rasm3.png"
import List from './components/List';
import rasm3 from "./img/rasm2.png"

import Case from './components/Case';
import rasm4 from "./img/odam1.svg"
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar rasm={rasm} />
      <Main rasm1={rasm1} />
      <Container />

      <MainContent rasm2={rasm2} />

      <List rasm3={rasm3} />
      <Case rasm4={rasm4}/>

      <Wrapper/>

      <Footer rasm={rasm}/>
    </>
  );
};

export default App;