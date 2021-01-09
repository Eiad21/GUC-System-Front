import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HRMemberItem from "./HRMemberItem"
import axios from 'axios'
import Navbar from './Navbar';

let test = false;
let realToken;

function HRMembersContainer(props) {
  const [state, setState] = useState(
    {
      arr:[]
    }
  );
  const deleteMe = (id)=>{
    console.log(id)
    axios.post('http://localhost:8080/hr/deleteMemberDepartment', {memberId:id} ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.arr= newstate.arr.filter((item)=>{
      return item.memberId != id;
    })
    setState(newstate);
  }

  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
      await axios.post('http://localhost:8080/hr/viewAllMembers', {} ,{params:{token:props.realToken}})
    .then((res) => {
      const newstate={...state};
      newstate.arr=res.data;
      setState(newstate);
      console.log("res.data");
      console.log(res.data);
      test = true;
    }) 
    .catch((err)=>{
      console.log(" ERROR in login");
     
       console.log(err);
    })
    console.log("after res")
    }
    if(!test){
      console.log(test)
      test = true;
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
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty / Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
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
          return <HRMemberItem
          id = {item.memberId}  
          name ={item.name} 
          mail={item.email} 
          fac={item.FacultyName} 
          dep = {item.departmentName} 
          MemberRank = {item.MemberRank}
          deleteMe = {deleteMe}/>
})}
        </tbody>
        </table>
      
      </div>
</div>

          
        )
}

export default HRMembersContainer;