import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar';
import CourseCoverage from './Components/CourseCoverage';
import HRAddMember from './Components/HRAddMember';
import HRAddFaculty from './Components/HRAddFaculty';
import HRAddDepartment from './Components/HRAddDepartment';
import HRAddLocation from './Components/HRAddLocation';
import HRAddCourse from './Components/HRAddCourse';
import HODRequestContainer from "./Components/HODRequestContainer";
import MyCourses from './Components/MyCourses';
import ViewCourses from './Components/ViewCourses';
import CourseSchedule from './Components/CourseSchedule';
import StaffDep from './Components/StaffDep';
import CourseStaff from './Components/CourseStaff';
import CoorRequestContainer from './Components/CoorRequestContainer';
import CoorAddSlot from './Components/CoorAddSlot';
import CoorDeleteSlot from './Components/CoorDeleteSlot';
import CoorUpdateSlot from './Components/CoorUpdateSlot';
import Schedule from './Components/Schedule';
import HRMembersContainer from './Components/HRMembersContainer';
import HRFacultiesContainer from './Components/HRFacultiesContainer';
import HRDepartmentsContainer from './Components/HRDepartmentsContainer';
import HRLocationsContainer from './Components/HRLocationsContainer';
import HRCoursesContainer from './Components/HRCoursesContainer';

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

  <Route exact path="/coordinator/requests">
  <React.StrictMode>
    <CoorRequestContainer/>
  </React.StrictMode>
  </Route>

  <Route exact path="/coordinator/addslot">
  <React.StrictMode>
    <CoorAddSlot/>
  </React.StrictMode>
  </Route>


  <Route exact path="/coordinator/updateslot">
  <React.StrictMode>
    <CoorUpdateSlot/>
  </React.StrictMode>
  </Route>

  <Route exact path="/coordinator/deleteslot">
  <React.StrictMode>
    <CoorDeleteSlot/>
  </React.StrictMode>
  </Route>

  <Route exact path="/schedule">
  <React.StrictMode>
    <Schedule/>
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

  <Route exact path="/StaffDep">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <StaffDep token={state.token}/>
  </React.StrictMode>
  </Route>

<Route exact path="/CourseSchedule/:courseName" component={CourseSchedule}>
  <React.StrictMode>
    <Navbar user={state.token}/>
    <CourseSchedule token={state.token}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/CourseStaff/:courseName" component={CourseStaff}>
  <React.StrictMode>
    <Navbar user={state.token}/>
    <CourseStaff token={state.token}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/addEntity">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRAddMember user={state.token} realToken={state.realToken}/>
    <HRAddFaculty user={state.token} realToken={state.realToken}/>
    <HRAddDepartment user={state.token} realToken={state.realToken}/>
    <HRAddLocation user={state.token} realToken={state.realToken}/>
    <HRAddCourse user={state.token} realToken={state.realToken}/>

  </React.StrictMode>
  </Route>


  <Route exact path="/myRequests">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HODRequestContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewMembers">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRMembersContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewFaculties">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRFacultiesContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewDepartments">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRDepartmentsContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewLocations">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRLocationsContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewAllCourses">
  <React.StrictMode>
    <Navbar user={state.token}/>
    <HRCoursesContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  </Switch>
  </Router>  
  </div>
  );
}

export default App;
