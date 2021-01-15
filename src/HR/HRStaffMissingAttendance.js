import React, {useEffect, useState} from 'react';
import HRStaffMissingAttendanceItem from "./HRStaffMissingAttendanceItem"
import axios from 'axios'
import {
  Redirect
} from "react-router-dom";

let realToken;

function HRStaffMissingAttendance(props) {
  const [state, setState] = useState(
    {
      counter:0,
      arr:[],
    }
  );

  
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
      await axios.post('http://localhost:8080/hr/viewMembersMissingTime', {} ,{params:{token:props.realToken}})
    .then((res) => {
      
      const newstate={...state};
      newstate.arr=res.data;
      newstate.counter = state.counter+1;
      setState(newstate);
      console.log("res.data");
      console.log(res.data);
    }) 
    .catch((err)=>{
      console.log(" ERROR in login");
     
       console.log(err);
    })
    console.log("after res")
    }
    if(state.counter %2=== 0){
      console.log("test")
      fetchData();
    }
  });

    return (
    !props.realToken?<Redirect to="/login"/>:
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty / Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          
        {state.arr.map((item)=>{
          return <HRStaffMissingAttendanceItem
          id = {item.memberId}  
          name ={item.name} 
          mail={item.email} 
          fac={item.FacultyName} 
          dep = {item.departmentName} 
          salary = {item.salary}
          MemberRank = {item.MemberRank}/>
})}
        </tbody>
        </table>
      
      </div>
</div>

          
        )
}

export default HRStaffMissingAttendance;