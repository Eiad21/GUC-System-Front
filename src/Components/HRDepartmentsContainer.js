import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HRDepartmentItem from "./HRDepartmentItem"
import axios from 'axios'
import Navbar from './Navbar';

let test = false;
let realToken;

function HRDepartmentsContainer(props) {
  const [state, setState] = useState(
    {
      counter:0,
      arr:[]
    }
  );
  const deleteMe = (mFacultyName, mDepartmentName)=>{
    axios.post('http://localhost:8080/hr/deleteDepartment', 
        {facultyName:mFacultyName, departmentName: mDepartmentName} ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.arr= newstate.arr.filter((item)=>{
      return (item.facultyName != mFacultyName || item.departmentName != mDepartmentName);
    })
    setState(newstate);
  }

  const updateMe = async (updateObj)=>{

    await axios.post('http://localhost:8080/hr/updateDepartment', updateObj ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.counter= state.counter+1;
    setState(newstate);
  }

  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
      await axios.post('http://localhost:8080/hr/viewAllDepartments', {} ,{params:{token:props.realToken}})
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
    if(state.counter %2== 0){
      console.log("test")
      fetchData();
    }
  });

    return (

    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Head ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Head Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          
        {state.arr.map((item)=>{
          return <HRDepartmentItem
          departmentName = {item.departmentName}
          facultyName = {item.facultyName}  
          headID ={item.headID} 
          headName={item.headName}
          updateMe = {updateMe}
          deleteMe = {deleteMe}/>
})}
        </tbody>
        </table>
      
      </div>
</div>

          
        )
}

export default HRDepartmentsContainer;