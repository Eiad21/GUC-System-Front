import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar';

let test = false;
let realToken;

function HRStaffAttendance(props) {
  const [state, setState] = useState(
  {
    counter:0,
    arr:[],
    testBool:false
  }
  );
  const setID = ()=>{
    const newstate={...state};
    newstate.testBool=!state.testBool;
    setState(newstate);
    console.log(state);
  }
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
       await axios.post('http://localhost:8080/hr/viewAllLocations', {} ,{params:{token:props.realToken}})
    .then((res) => {
      const newstate={...state};
      newstate.arr=res.data;
      newstate.counter = state.counter+1;
      setState(newstate);
      console.log("state after inital post req");
      console.log(state);
    }) 
    .catch((err)=>{
      console.log(" ERROR in login");
     
       console.log(err);
    })
    console.log("after res")
    }
    if(state.counter %2== 0){
      console.log("test")
      fetchData();
    }
  });

    return (
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={setID} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
        )
}

export default HRStaffAttendance;