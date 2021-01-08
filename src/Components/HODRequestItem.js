







import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HODRequestItem(props) {
    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanId:"",
        }
      )
     return (
        <div >
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                Jane Cooper
                                </div>
                                <div className="text-sm text-gray-500">
                                jane.cooper@example.com
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>

        </tbody>
    </div>
          
        )
}





export default HODRequestItem;

