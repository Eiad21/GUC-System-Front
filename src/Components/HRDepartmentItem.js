import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HRDepartmentItem(props) {
    const [state, setState] = useState(
        {
          DepartmentName:"",
          DeanId:"",
        }
      )
     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.departmentName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.headID}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  {props.headName}
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a style={{color: "red"}} class="text-indigo-600 hover:text-indigo-900" onClick={()=>{props.deleteMe(props.id)}}>Delete</a>
              </td>
            </tr>
          
        )
}

export default HRDepartmentItem;