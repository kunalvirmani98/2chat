import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout/layout';
import reportWebVitals from './reportWebVitals';
import colorScheme from "./constants/constant";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
