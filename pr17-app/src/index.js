import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './vitals/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ color: "#0f0f0f" }}>DEBUG: INDEX.JS</div>
    <App />
  </React.StrictMode>
);

reportWebVitals();
