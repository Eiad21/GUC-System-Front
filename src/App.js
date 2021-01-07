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

import MyCourses from './Components/MyCourses';
import ViewCourses from './Components/ViewCourses';
import CourseSchedule from './Components/CourseSchedule';
const jwt= require('jsonwebtoken')
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
    <Dashboard name={state.token.name} token={state.token}/>
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
    <CourseCoverage token={state.token}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/MyCourses">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <MyCourses token={state.token}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/ViewCourses">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <ViewCourses token={state.token}/>
  </React.StrictMode>
  </Route>

<Route exact path="/CourseSchedule/:courseName" component={CourseSchedule}>
  <React.StrictMode>
    <Navbar user={state.token}/>
    <CourseSchedule token={state.token}/>
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
