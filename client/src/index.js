import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import ExampleComponent from './components/example/Example'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/profile" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/sign-up" element={<App />} />
        <Route path="/search" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
