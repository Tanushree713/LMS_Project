//Components imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Library imports
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <BrowserRouter>
   <App />
   <Toaster/>
   </BrowserRouter>
   </Provider>

);

reportWebVitals();
