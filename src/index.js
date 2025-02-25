import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.css';
import './styles/common.css'
import Header from './components/header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
