import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Favourite from './pages/Favourite';
import Recipe from './pages/Recipe';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);