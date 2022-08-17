import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import Database from './service/database';

const authService = new AuthService();
const database = new Database();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} database={database}/>
  </React.StrictMode>
);

