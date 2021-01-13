import React,{Component} from "react"  

import AcademicMemberReplacementItem from '../Components/AcademicMemberReplacementItem';
import axios  from "axios"
class AcademicMemberReplacementContainer extends Component {
    constructor(){
        super();
        this.state={requests:[]}
    }
    componentDidMount(){
        console.log("AcademicMemberReplacementContainer Did mount");
        axios.get('http://localhost:8080/anyAcademic/replacementReq', {params:{token:this.props.realToken}})
        .then(res  => {
          console.log(res.data);
          console.log("in view replacement in academic member")
          this.setState(
                {requests:res.data}
          );
            
        }) 
    }
    // this.handleYear = this.handleYear.bind(this);
    // this.handleMonth = this.handleMonth.bind(this);
    // this.handleDay = this.handleDay.bind(this);
    // this.handleReason = this.handleReason.bind(this);
    // this.handleContent = this.handleContent.bind(this);
    // this.handleReciever = this.handleReciever.bind(this);
    // this.handleComment = this.handleComment.bind(this);
    // this.handleTime = this.handleTime.bind(this);
    // this.handleLocation = this.handleLocation.bind(this);
    // this.handleSlotCourse = this.handleSlotCourse.bind(this);

render(){  
        let requests = this.state.requests.map(req => {
             return (
                < AcademicMemberReplacementItem 
                  sender={req.sender}
                  slotDate = {req.date}
                  reason = {req.reason}
                  content = {req.content}
                  comment = {req.comment}
                  slotCourse = {req.slotCourse}
                  slotTime = {req.slotTime}
                  status={req.status}
                />
             )
        })
    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slot Date
              </th>
             
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Reason</span>
              </th>


              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Content</span>
              </th>

              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Comment</span>
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slot Time
              </th>
              
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>

            </tr>
          </thead>
        
        </table>
       { {requests} }
       < AcademicMemberReplacementItem 
                  sender="abdallah"
                  slotDate = "2021/5/8"
                  reason = "acml"
                  content = "acml"
                  comment = "saba7 el d7k"
                  slotCourse = "microprocessors"
                  slotTime = "3"
                  status="pending"
       />
      </div>
    </div>
  </div>
</div>
          
        )

    }
}
export default AcademicMemberReplacementContainer