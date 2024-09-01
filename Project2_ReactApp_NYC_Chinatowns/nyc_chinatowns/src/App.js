import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flushing from './pages/Flushing';
import Brooklyn from './pages/Brooklyn';
import Manhattan from './pages/Manhattan';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flushing" element={<Flushing />} />
          <Route path="/brooklyn" element={<Brooklyn />} />
          <Route path="/manhattan" element={<Manhattan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
