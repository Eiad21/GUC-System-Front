import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HRMemberItem from "./HRMemberItem"
import axios from 'axios'
import Navbar from './Navbar';

let test = false;
function HRMembersContainer(props) {
  const [state, setState] = useState(
    {
      arr:[]
    }
  );
  console.log("hello")
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      await axios.post('http://localhost:8080/hr/viewAllMembers', {} ,{params:{token:props.realToken}})
    .then((res) => {
      const newstate={...state};
      newstate.arr=res.data;
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
    if(!test){
      console.log(test)
      test = true;
      fetchData();
    }
  });

    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
        </table>
      {state.arr.map(()=>{return <HRMemberItem  />
})}
      
      </div>
    </div>
  </div>
</div>
          
        )
}

export default HRMembersContainer;