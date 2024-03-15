import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reportWebVitals } from './reportWebVitals'; // Import reportWebVitals function

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Call reportWebVitals function after ReactDOM.render()
reportWebVitals();