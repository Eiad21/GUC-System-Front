import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HodStaffinDepartment(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          CourseName:"Null" ,
          isViewed:false ,
          staffArray:[]  
        }
      );
    
    const handleviewstaff=(evt)=>{
          
        if(state.CourseName=="Null")
        {
                axios.get('http://localhost:8080/hod/viewallstaffInMyDepartment' , {params:{token:props.realToken}}).then(res=>{
                  state.staffArray=res.data;
                }).catch((err)=>{console.log(err);})
        }
        else
        {
          axios.get(`http://localhost:8080/hod/viewallstaffforThisCourse/${state.CourseName}` , {params:{token:props.realToken}}).then(res=>{
            state.staffArray=res.data;
           }).catch((err)=>{console.log(err);})
          }   

    //     console.log("user" + props.user)
    //     console.log("token" + props.realToken)
    //     if(state.firstName == ""){
    //         alert("Enter first name");
    //         return;
    //     }
    //     if(state.lastName == ""){
    //         alert("Enter last name");
    //         return;
    //     }
    //     var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)+(?:.[a-zA-Z0-9-]+)$/;
    // if(state.mail.match(mailformat)){
    //    // alert("cor")
    // }
    // else{
    //   //  alert("wrong")
    // }
    //     if(state.gender == ""){
    //         alert("Enter gender");
    //         return;
    //     }
    //     const combine = `${state.firstName} ${state.lastName}`
    //     const memberInfo = {
          
    //         MemberRank:state.MemberRank,
    //         name: combine,
    //         gender: state.gender,
    //         email: state.mail
    //     }
      

    //     axios.post('http://localhost:8080/hr/addMember' , memberInfo, {params:{token:props.realToken}})
    //     .then((res) => {
    //       console.log(res.data);
    //       const token=res.data;
          
    //       history.push("/");
    //     }) 
    //     .catch((err)=>{
    //       console.log(" ERROR in login");
         
    //        console.log(err);
    //        const newstate={...state};
    //        if(!err || !err.res || !err.res.data){
    //         newstate.error='Access denied';
    //        }
    //        else{
    //           newstate.error=err.res.data;
    //        }
    //       setState(newstate);
    //     })

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
    const handleCourseName=(evt)=> {
        const newstate={...state};
        newstate.CourseName=evt.target.value;
        setState(newstate);
        console.log(newstate)
     }
     

    return (
            <div>
<div className="hidden sm:block" aria-hidden="true">
<div className="py-5">
  <div className="border-t border-gray-200"></div>
</div>
</div>

<div className="mt-10 sm:mt-0">
<div className="md:grid md:grid-rows-1 md:gap-6" style = {{marginRight: 150, marginLeft: 150}}>
  <div className="md:col-span-1">
    <div className="px-4 sm:px-0">
      <h3 className="text-lg font-medium leading-6 text-gray-900">view staff Member</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter the Course Name if you want to view staff in this course .
      </p>
      <p className="mt-1 text-sm text-gray-600">
        if Null Display all Staff in your Department
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            
          <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-sm font-medium text-gray-700">Course Name</label>
              <select  onChange={handleCourseName} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Null</option>
                <option>gamed</option>
                <option>gedan</option>

              </select>
            </div>
           
          </div>
        
          
        
        </div>

        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onclick ={handleviewstaff}type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            view
          </button>
        </div>
      </div>
  </div>
</div>
</div>
</div>
        )
}

export default HodStaffinDepartment;