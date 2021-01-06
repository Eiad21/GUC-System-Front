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
import HRAddMember from './Components/HRAddMember';

function App() {
  const [state, setState] = useState(
    {
      token:{},
      realToken:""
    }
  );
  const updateUser=(token2, realToken2)=>{
    const newstate={token:token2, realToken:realToken2};
    //newstate.token=token;
    setState(newstate);
    console.log(newstate)
  }
  return (
    <div>
    <Router>
  <Switch>
  <Route exact path="/">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <Dashboard user={state.token}/>
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

  <Route exact path="/addEntity">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRAddMember user={state.token} realToken={state.realToken}/>
    <HRAddMember user={state.token}/>
    <HRAddMember user={state.token}/>
    <HRAddMember user={state.token}/>
  </React.StrictMode>
  </Route>

  </Switch>
  </Router>
  </div>
  );
}

export default App;
