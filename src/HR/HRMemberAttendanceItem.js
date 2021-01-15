import React, {useState} from 'react';
import HRMemberAttendanceDetail from './HRMemberAttendanceDetail'
function HRMemberAttendanceItem(props) {
    const [state, setState] = useState(
        {
          detailsShown:false
        }
      )
    const showDetails = ()=>{
      const newstate = {...state};
      newstate.detailsShown = !state.detailsShown
      setState(newstate);
    }
     return (
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-sm text-gray-500">
                      {props.memberId}
                    </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-sm text-gray-500">
                      {props.date}
                    </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props.missedDay}
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a 
                style = {{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900"
                onClick={showDetails}>Edit</a>
              </td>
              {state.detailsShown&&
                      props.sessions.map((item, idx)=>{
                        return <HRMemberAttendanceDetail
                        timein = {item.timein}
                        timeout = {item.timeout}
                        idx = {idx+1}/>
              })
            }
            </tr>
          
        )
}
export default HRMemberAttendanceItem;

