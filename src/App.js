import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Yes from './components/yes'
import Home from './components/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Yes" element={<Yes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
