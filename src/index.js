import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Components/Login'
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar';

ReactDOM.render(
  <Router>
  <Switch>
  <Route exact path="/">
  <React.StrictMode>
    <Navbar/>
    <Dashboard name={"Eiad"}/>
  </React.StrictMode>
  </Route>
  <Route path="/login">
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
  </Route>
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();