import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';

import './App.scss';
import Navbar from './components/NavBar';

const TestCreationJson = lazy(() => import ('./components/TestCreationJson'));

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Container className='mt-5'>
          <Col  xl={{span: 6 , offset: 3}}>
            <Routes>
              <Route path="/" element={<Suspense><TestCreationJson/></Suspense>}></Route>
            </Routes>
          </Col>
        </Container>
      </BrowserRouter>
  );
}

export default App;
