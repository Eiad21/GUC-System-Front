import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HRCourseItem(props) {
    const [state, setState] = useState(
        {
          DepartmentName:"",
          DeanId:"",
        }
      )
     return (
                <tr>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                      {props.courseName}
                    </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-md font-medium text-gray-900">
                    {props.departmentName}
                    </div>
                    <div class="text-sm text-gray-500">
                      {props.facultyName}
                    </div>
                  </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
              <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                      {props.assignedCount}
                    </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a style={{cursor:'pointer'}} class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a style={{color: "red", cursor:'pointer'}} class="text-indigo-600 hover:text-indigo-900" onClick={()=>{props.deleteMe(props.facultyName, props.departmentName)}}>Delete</a>
              </td>
            </tr>
          
        )
}

export default HRCourseItem;