import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HRLocationItem(props) {
    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanId:"",
        }
      )
     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.locationName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.locationType}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  {props.capacity}
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a style={{color: "red"}} class="text-indigo-600 hover:text-indigo-900" onClick={()=>{props.deleteMe(props.locationName)}}>Delete</a>
              </td>
            </tr>
          
        )
}

export default HRLocationItem;