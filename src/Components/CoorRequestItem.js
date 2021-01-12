import React,{Component} from "react"   
import axios from "axios"

class CoorRequestItem extends Component {

   
 handleAccept(){
    axios.get('http://localhost:8080/cooRoutes/acceptSlotLinking')
    .then(res  => {
       
        console.log(res);
    } ) 
 }

render(){

    return (
        <div >
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.sender}
                                </div>
                              
                            </div>
                        </div>
                    </td>
                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.date}
                                </div>
                              
                            </div>
                        </div>
                    </td>

                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.courseName}
                                </div>
                              
                            </div>
                        </div>
                    </td>



                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <button className="submit">Accept</button>
                              
                            </div>
                        </div>
                    </td>
                    {/* accept button */}
                   
                    {/* reject button */}
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <button className="submit">Reject</button>
                              
                            </div>
                        </div>
                    </td>



                </tr>

        </tbody>
    </div>
          
        )

    }
}
export default CoorRequestItem