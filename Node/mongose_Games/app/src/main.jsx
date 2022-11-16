import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Character from './routes/Characters';
import Detail from './routes/Detail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/character/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
