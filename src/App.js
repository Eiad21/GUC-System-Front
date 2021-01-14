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


import HRMembersContainer from './Components/HRMembersContainer';
import HRFacultiesContainer from './Components/HRFacultiesContainer';
import HRDepartmentsContainer from './Components/HRDepartmentsContainer';
import HRLocationsContainer from './Components/HRLocationsContainer';
import HRCoursesContainer from './Components/HRCoursesContainer';
import HRStaffAttendance from './Components/HRStaffAttendance';
import HodStaffinDepartment from './Components/HodStaffinDepartment'
import HodStaffDayOffview from './Components/HodStaffDayOffview'
import HodViewCoverageOfCourses from './Components/HodViewCoverageOfCourses'
import HodViewTeachingAssignment from './Components/HodViewTeachingAssignment'
import HODAssignStaffToCourse from "./Components/HODAssignStaffToCourse"
// testing front end 
import CoorRequestContainer from './Coordinator/CoorRequestContainer';
import CoorAddSlot from './Coordinator/CoorAddSlot';
import CoorDeleteSlot from './Coordinator/CoorDeleteSlot';
import CoorUpdateSlot from './Coordinator/CoorUpdateSlot';
import AcademicMemberReplacement from './AnyAcademic/AcademicMemberReplacement';
import AnyAcademicDayOffRequest from './AnyAcademic/AnyAcademicDayOffRequest';
import AnyAcademicLeaveRequest from './AnyAcademic/AnyAcademicLeaveRequest';
import AnyAcademicSlotLinkingRequest from './AnyAcademic/AnyAcademicSlotLinkingRequest';
import Profile from './Components/Profile';
import AcademicMemberReqContainer from './AnyAcademic/AcademicMemberReqContainer';

import AcademicMemberReplacementContainer from './AnyAcademic/AcademicMemberReplacementContainer';

// import AnyAcademicSlotLinkingRequest from './AnyAcademicSlotLinkingRequest';
// import AnyAcademicSlotLinkingRequest from './AnyAcademicSlotLinkingRequest';
// import AnyAcademicSlotLinkingRequest from './AnyAcademicSlotLinkingRequest';


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
  const logOut=()=>{
    const newstate={token:{}, realToken:""};
    //newstate.token=token;
    setState(newstate);
  }
  return (
    <div>
    <Router>
  <Switch>
  <Route exact path="/">    {/* Dashboard */}
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <Dashboard name={state.token.name} token={state.token} realToken={state.realToken}/>
    
  </React.StrictMode>
  </Route>

  <Route exact path="/login"> 
  <React.StrictMode>
    <Login updateUser={updateUser}/>
  </React.StrictMode>
  </Route>

  {/* AcademicMemberReqContainer */}
{/* ent a  wa2ef hena  */}

<Route exact path="/AcademicMemberReqContainer">
  <React.StrictMode>
  <Navbar user={state.token} logOut={logOut}/>
    <AcademicMemberReqContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/coordinator/requests">
  <React.StrictMode>
  <Navbar user={state.token} logOut={logOut}/>
    <CoorRequestContainer user={state.token} realToken={state.realToken}/>
    <CoorDeleteSlot user={state.token} realToken={state.realToken}/>
    <CoorAddSlot user={state.token} realToken={state.realToken}/>
    <CoorUpdateSlot user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>
{/* AcademicMemberReqContainer */}
  {/* hena bardo  */}

  <Route exact path="/AnyAcademicLeaveRequest">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>

<  AnyAcademicLeaveRequest user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>


  <Route exact path="/AnyAcademicDayOffRequest">
  <React.StrictMode>
  <Navbar user={state.token} logOut={logOut}/>

  <  AnyAcademicDayOffRequest user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/AcademicMemberReplacement">
  <React.StrictMode>

  <Navbar user={state.token} logOut={logOut}/>
  <AcademicMemberReplacement user={state.token} realToken={state.realToken}/>
  <  AcademicMemberReplacementContainer user={state.token} realToken={state.realToken}/>

  </React.StrictMode>
  </Route>


 

  <Route exact path="/courseCoverage">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <CourseCoverage token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/MyCourses">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <MyCourses token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>
  
  <Route exact path="/ViewCourses">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <ViewCourses token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/StaffDep">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <StaffDep token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

<Route exact path="/CourseSchedule/:courseName" component={CourseSchedule}>
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <CourseSchedule token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/CourseStaff/:courseName" component={CourseStaff}>
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <CourseStaff token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/addEntity">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRAddMember user={state.token} realToken={state.realToken}/>
    <HRAddFaculty user={state.token} realToken={state.realToken}/>
    <HRAddDepartment user={state.token} realToken={state.realToken}/>
    <HRAddLocation user={state.token} realToken={state.realToken}/>
    <HRAddCourse user={state.token} realToken={state.realToken}/>

  </React.StrictMode>
  </Route>


  <Route exact path="/myRequests">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HODRequestContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>
  <Route exact path="/viewentityinfo">
  <React.StrictMode>
  <Navbar user={state.token} logOut={logOut}/>
    <HodStaffinDepartment user={state.token} realToken={state.realToken}/>
    <HodStaffDayOffview user={state.token} realToken={state.realToken}/>
    <HodViewCoverageOfCourses user={state.token} realToken={state.realToken}/>
    <HodViewTeachingAssignment user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>


  <Route exact path="/manipulatestaff">
  <React.StrictMode>
  <Navbar user={state.token} logOut={logOut}/>
    <HODAssignStaffToCourse user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  HODAssignStaffToCourse
  

  {/* test  */}

  <Route exact path="/coorrequestcontainer">
  <React.StrictMode>

    <CoorRequestContainer />
  </React.StrictMode>
  </Route>


  
  

  <Route exact path="/AnyAcademicSlotLinkingRequest">
  <React.StrictMode>
    <AnyAcademicSlotLinkingRequest />
  </React.StrictMode>
  </Route>

  

 

  <Route exact path="/profile">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <Profile token={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  {/* test ends  */}
  
  {/* Hr Routes*/}
  <Route exact path="/viewMembers">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRMembersContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewFaculties">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRFacultiesContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewDepartments">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRDepartmentsContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewLocations">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRLocationsContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewAllCourses">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRCoursesContainer user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  <Route exact path="/viewStaffAttendance">
  <React.StrictMode>
    <Navbar user={state.token} logOut={logOut}/>
    <HRStaffAttendance user={state.token} realToken={state.realToken}/>
  </React.StrictMode>
  </Route>

  </Switch>
  </Router>  
  </div>
  );
}

export default App;
