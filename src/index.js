import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './resources/responsive.css';
import './resources/plugins/fontawesome-free-5.11.2-web/css/all.min.css';
import './resources/plugins/bootstrap/bootstrap.min.css';
import './resources/plugins/bootstrap/bootstrap.min.css';
import './resources/plugins/kipso-icons/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
