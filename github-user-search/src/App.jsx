// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          GitHub User Search
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
