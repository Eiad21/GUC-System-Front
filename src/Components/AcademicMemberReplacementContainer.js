


import React,{Component} from "react"  

import AcademicMemberReplacementItem from './AcademicMemberReplacementItem';
import axios  from "axios"
class AcademicMemberReplacementContainer extends Component {
    constructor(){
        super();
        this.state={requests:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:8080/cooRoutes/viewSlotLinkingReqs')
        .then(res  => {
            this.setState(
                {requests:res}
                ) ;
            console.log(res);
        } ) 
     }

render(){
        // let requests = this.state.requests.map(req => {
        //     < CoorRequestItem sender={req.sender} date ={req.date} courseName ={req.reciever}/>
        // })
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
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content
              </th>
             
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Reason</span>
              </th>


              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Comment</span>
              </th>



              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Status</span>
              </th>


            </tr>
          </thead>
        
        </table>
       {/* {requests} */}
       < AcademicMemberReplacementItem sender="omar" date ="22-1-2003 "content ="acml" reason ="acml" comment ="acml" status ="acml"/>
   
      </div>
    </div>
  </div>
</div>
          
        )

    }
}
export default AcademicMemberReplacementContainer