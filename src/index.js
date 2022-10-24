import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import { StateContextProvider } from './contexts/StateContextProvider';
// import  NewsContextProvider  from './contexts/NewsContextProvider';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateContextProvider>
    <Router>
    <App />
    </Router>
    </StateContextProvider>
);

