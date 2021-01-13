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
            <AcademicMemberReqCell data={this.props.type}/>
            <AcademicMemberReqCell data={this.props.reciever}/>
            <AcademicMemberReqCell data={this.props.reason}/>
            <AcademicMemberReqCell data={this.props.content}/>
            <AcademicMemberReqCell data={this.props.comment}/>
            <AcademicMemberReqCell data={this.props.slotDate}/>
            <AcademicMemberReqCell data={this.props.slotCourse}/>
            <AcademicMemberReqCell data={this.props.leavingDate}/>
            <AcademicMemberReqCell data={this.props.newDayOff}/>
            <AcademicMemberReqCell data={this.props.slotTime}/>
            <AcademicMemberReqCell data={this.props.status}/>

           
            {/* cancel button */}
            
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