import React from 'react';
import ReactDOM from 'react-dom';
import './intro.css';
import App from './App';
import Quiz from "./Quiz";
import Landing from "./Landing";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"component={Landing}/>
      <Route path="/Quiz" component={Quiz}/>
    </Switch>
    
  </BrowserRouter>,
 rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
