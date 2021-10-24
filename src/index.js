import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Quiz from "./Quiz";
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import Button from './Button';

ReactDOM.render(
  <React.StrictMode>
    {/* <Quiz /> */}
    {/* <App /> */}
    <Landing />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
