import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Twitter from './Component/Twitter';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Twitter />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
