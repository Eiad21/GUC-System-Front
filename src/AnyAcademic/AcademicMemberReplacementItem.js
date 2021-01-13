import React,{Component} from "react";
import AcademicMemberReplacementCell from "./AcademicMemberReplacmentCell";

class AcademicMemberReplacementItem extends Component {
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
                    <button className="submit">Accept</button>                  
                    </div>
                </div>
            </td>
           
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
export default AcademicMemberReplacementItem