import React,{Component} from "react";
import axios from "axios";
import AcademicMemberReplacementCell from "./AcademicMemberReplacmentCell";



class AcademicMemberReplacementItem extends Component {

    constructor(){
        super()
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    componentDidMount(){
        console.log("rep Item did mount")
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



            <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.sender}/>
                        </div>
                    </div>
                </td>


                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.slotDate}/>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.reason}/>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.content}/>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.comment}/>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.slotCourse}/>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.slotTime}/>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        </div>
                        <div className="ml-4">
                        <AcademicMemberReplacementCell data={this.props.status}/>
                        </div>
                    </div>
                </td>

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