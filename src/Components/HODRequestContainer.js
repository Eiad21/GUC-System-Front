import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import HODRequestItem from "./HODRequestItem"
import axios from 'axios'

function HODRequestContainer(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanId:"",

          array1:[1,2,3]
        }
      );
    
    const addFaculty=(evt)=>{
        console.log("user" + props.user)
        console.log("token" + props.realToken)
        if(state.FacultyName == ""){
            alert("Enter Faculty name");
            return;
        }
     
        var DeanFormat = /^[ac]+(?:-[0-9]+)$/;
    if(state.DeanId.match(DeanFormat)){
       alert("cor")
    }
    else{
       alert("wrong")
    }
     
        const FacultyInfo = {
          
            facultyName:state.FacultyName,
            deanID: state.DeanId,
           
          
        }
      
        

        axios.post('http://localhost:8080/hr/addfaculty' , {email:"kimo",password:123456})
        .then((res) => {
          console.log(res.data);
          const token=res.data;
          
          history.push("/");
        }) 
        .catch((err)=>{
          console.log(" ERROR in login");
         
           console.log(err);
           const newstate={...state};
           if(!err || !err.res || !err.res.data){
            newstate.error='Access denied';
           }
           else{
              newstate.error=err.res.data;
           }
          setState(newstate);
        })

        // axios.post('http://localhost:8080/hr/addMember' , {ahmed:"hla"})
        // .then((res) => {
        //   console.log(res.data);        
        //   history.push("/addEntity");
        // }) 
        // .catch((err)=>{
        //   console.log(" ERROR in login");
         
        //    console.log(err);
        //    const newstate={...state};
        //    if(!err || !err.res || !err.res.data){
        //     newstate.error='Access denied';
        //    }
        //    else{
        //       newstate.error=err.res.data;
        //    }
        //   setState(newstate);
        // })
    }
  
     

    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
        
        </table>

      {state.array1.map(()=>{return <HODRequestItem/>
})}
      
      </div>
    </div>
  </div>
</div>
          
        )
}





export default HODRequestContainer;





