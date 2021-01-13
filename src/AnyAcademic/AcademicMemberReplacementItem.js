import React,{Component} from "react";
import axios from "axios";
import AcademicMemberReplacementCell from "./AcademicMemberReplacmentCell";



class AcademicMemberReplacementItem extends Component {

    constructor(){
        super()
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    handleAccept(){
        axios.post('http://localhost:8080/memberRoutes/acceptReplacementReq' , {repId:this.props.repId} ,{params:{token:this.props.realToken}})
        .then(res  => {
            console.log("accept rep request")
            console.log(res.data);
        } ) 
     }
     handleReject(){
        axios.post('http://localhost:8080/memberRoutes/rejectReplacementReq' , {repId:this.props.repId} ,{params:{token:this.props.realToken}})
        .then(res  => {
            console.log("reject rep request")
            console.log(res.data);
        } ) 
     }

    render(){

    return(
        <div >
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <AcademicMemberReplacementCell data={this.props.sender}/>
                <AcademicMemberReplacementCell data={this.props.slotDate}/>
                <AcademicMemberReplacementCell data={this.props.reason}/>
                <AcademicMemberReplacementCell data={this.props.content}/>
                <AcademicMemberReplacementCell data={this.props.comment}/>
                <AcademicMemberReplacementCell data={this.props.slotCourse}/>
                <AcademicMemberReplacementCell data={this.props.slotTime}/>
                <AcademicMemberReplacementCell data={this.props.status}/>

                {/* accept button */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <button onClick={this.handleAccept} className="submit">Accept</button>                  
                        </div>
                    </div>
                </td>
            
                {/* reject button */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <button onClick={this.handleReject} className="submit">Reject</button>
                        </div>
                    </div>
                </td>
            </tr>

    </tbody>
    </div>
    )}
}
export default AcademicMemberReplacementItem