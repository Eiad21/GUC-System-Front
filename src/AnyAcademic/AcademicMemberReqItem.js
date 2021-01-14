import React,{Component} from "react";
import AcademicMemberReqCell from "./AcademicMemberReqCell";
import axios from "axios";
class AcademicMemberReqItem extends Component {

    constructor(){
        super()
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel(){
        axios.post('http://localhost:8080/memberRoutes/cancelReq' , {_id:this.props.repId} ,{params:{token:this.props.realToken}})
        .then(res  => {
            console.log("cancel request")
            console.log(res.data);
        } ) 
     }

render(){

return(
    <div >
    <tbody className="bg-white divide-y divide-gray-200">
        <tr>

           
        <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.type}/>       
                         </div>
                    </div>
                </td>
            
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.reciever}/>                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                         <AcademicMemberReqCell data={this.props.reason}/>
                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.content}/>                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.comment}/>                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.slotDate}/>                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.slotCourse}/>
                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.leavingDate}/>
                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.newDayOff}/>
                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.slotTime}/>
                         </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReqCell data={this.props.status}/>
                         </div>
                    </div>
                </td>

            {
                this.props.status==="pending"
                &&
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <button onChange={this.handleCancel} className="submit">Cancel</button>
                        </div>
                    </div>
                </td>
            }
        </tr>

</tbody>
</div>
)
    }
}
export default AcademicMemberReqItem



