import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reviews from './Reviews';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css'
import { Route } from "react-router-dom";
import { BrowserRouter as Router }  from "react-router-dom";
import { Switch } from "react-router-dom";
import UsersList from './UsersList';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
     <Router>
    <Switch>
      <Route path="/reviews/:user">
        <Reviews />
      </Route>
      <Route path="/users">
        <UsersList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
    <App>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
