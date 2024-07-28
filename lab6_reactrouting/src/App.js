import React from 'react';
import Navbars from './components/navbars';
import Home from './components/home';
import About from './components/about'; 
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className='title'>React Routing by Adeeb Khan</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbars />}>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
