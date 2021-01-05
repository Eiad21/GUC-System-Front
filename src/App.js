import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar';
import CourseCoverage from './Components/CourseCoverage';

function App() {
  const [state, setState] = useState(
    {
      token:{}
    }
  );
  const updateUser=(token)=>{
    const newstate={...state};
    newstate.token=token;
    setState(newstate);
  }
  return (
    <div>
    <Router>
  <Switch>
  <Route exact path="/">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <Dashboard name={state.token.name} user={state.token}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/login">
  <React.StrictMode>
    <Login updateUser={updateUser}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/courseCoverage">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <CourseCoverage/>
  </React.StrictMode>
  </Route>

  </Switch>
  </Router>
  </div>
  );
}

export default App;
