import React,{useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';   
import axios from "axios";
import  '../Components/Navbar.css';



  function HodViewTeachingAssignment (props) {
    const history = useHistory();

    const [state, setState] = useState(
        {
            schedule:[],
            isViewed:false
        }
      );
    
    
    // component did mount
    

    const daysOfWeek = {sat:0,sun:1,mon:2,tue:3,wed:4,thu:5,fri:6};
    
    const handleview=(evt)=>{
          
       
        const newstate={...state};
            newstate.isViewed=true;
            axios.get("http://localhost:8080/hod/viewteachingassignments", {params:{token:props.realToken}}).then(res=>{
            newstate.schedule=res.data;
            setState(newstate);
            console.log(newstate)       

              }).catch((err)=>{console.log(err);})
    

  }
    const getscheduleinfo= (courseschedule,day,time)=>
    {


        let array =[];
        let counter =0;
            courseschedule.forEach(element => {
              if(element.day == day && element.time == time)
              {
                array.push({output:element})
              }
              else{if(counter<1){array.push(""); counter++}}
                     
            });


          return array;  
    }




     return(
        
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
                  <h3 className="text-3xl font-medium leading-6 text-gray-900">view Course Teaching Assignment</h3>
                
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        
                     
            
            
            
                     
                       
                      </div>
                    
                     
                      <div>
    
        { state.isViewed&&
         <table className="table-fixed w-5/6">
             
                    {state.schedule.map(element=>{return (
                        <div>
                    <div className="col-span-6 sm:col-span-3">
                        
                    <label for="country" className="block text-lg font-medium text-gray-700">Course Name:{element.CourseName}</label>
                            
                    </div>
                    <thead >
                        <tr className="px-6 py-3 text-left text-xs font-medium bg-gray-800 text-gray-50 uppercase tracking-wider ">
                            <th className=" px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">slot\day</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div >
                            <th  className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider ">Saturday </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Sunday </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Monday</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Tuesday</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Wednesday</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Thursday </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Friday</th>
                        
                        </tr>
                        </thead>
                        <hr></hr>
                        <tbody>
                        <div className=" black">
                        {/* <div className="border-t border-gray-200"></div> */}
                          </div>
                        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 bg-gray-800 uppercase tracking-wider">First</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div>
                        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">
                        { 
                        getscheduleinfo(element.courseSchedule,"SUN",1).map(element=>{
                            return(
                             <div className="flex items-center">
                             <div className="flex-shrink-0 h-10 w-10">
                             </div>
                             <div className="ml-4">
                             {element.assignedMemberID && <div>
                             <div className="text-xs text-gray-500">
                                 
                                 Staff ID: {element.output.assignedMemberID}
                                 </div>
                                 <div className="text-xsfont-medium text-gray-900">
                                  Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                 </div>
                                     <div className="text-xs text-gray-500 font-bold">
                                OFFICE: {element.location}
                                 </div>
                         </div> }
                         {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                 
                                 Empty
                                 </div>}
                             </div>
                         </div> )
                     })
                        }
                     </th>
                            <th className=" px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"SUN",1).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                    <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"MON",1).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"TUE",1).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> ) 
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"WED",1).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"THU",1).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                    <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })} </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"FRI",1).map(element=>{
                             return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                        </tr>
                        
                        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 bg-gray-800 uppercase tracking-wider">Second</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div>
                        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">
                        {getscheduleinfo(element.courseSchedule,"SAT",2).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}
                     </th>
                            <th className="  px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"SUN",2).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="   px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"MON",2).map(element=>{return(
                               <div className="flex items-center">
                               <div className="flex-shrink-0 h-10 w-10">
                               </div>
                               <div className="ml-4">
                               <div className="text-xs text-gray-500">
                                   Staff ID: {element.output.assignedMemberID}
                                   </div>
                                   <div className="text-xsfont-medium text-gray-900">
                                    Staff Assigned: {element.output.assignedMemberName}
                                   </div>
                                       <div className="text-xs text-gray-500 font-bold">
                                  OFFICE: {element.output.location}
                                   </div>
                                   
                               </div>
                           </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"TUE",2).map(element=>{return (
                               <div className="flex items-center">
                               <div className="flex-shrink-0 h-10 w-10">
                               </div>
                               <div className="ml-4">
                               {element.assignedMemberID && <div>
                               <div className="text-xs text-gray-500">
                                   
                                   Staff ID: {element.output.assignedMemberID}
                                   </div>
                                   <div className="text-xsfont-medium text-gray-900">
                                    Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                   </div>
                                       <div className="text-xs text-gray-500 font-bold">
                                  OFFICE: {element.location}
                                   </div>
                           </div> }
                           {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                   
                                   Empty
                                   </div>}
                               </div>
                           </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"WED",2).map(element=>{return(
                                     <div className="flex items-center">
                                     <div className="flex-shrink-0 h-10 w-10">
                                     </div>
                                     <div className="ml-4">
                                     {element.assignedMemberID && <div>
                                         <div className="text-xs text-gray-500 font-bold">
                                         
                                         Staff ID: {element.output.assignedMemberID}
                                         </div>
                                         <div className="text-xsfont-medium text-gray-900 font-bold">
                                          Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                         </div>
                                             <div className="text-xs text-gray-500 font-bold">
                                        OFFICE: {element.location}
                                         </div>
                                 </div> }
                                 {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                         
                                         Empty
                                         </div>}
                                     </div>
                                 </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"THU",2).map(element=>{return(
                                     <div className="flex items-center">
                                     <div className="flex-shrink-0 h-10 w-10">
                                     </div>
                                     <div className="ml-4">
                                     {element.assignedMemberID && <div>
                                         <div className="text-xs text-gray-500 font-bold">
                                         
                                         Staff ID: {element.output.assignedMemberID}
                                         </div>
                                         <div className="text-xsfont-medium text-gray-900 font-bold">
                                          Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                         </div>
                                             <div className="text-xs text-gray-500 font-bold">
                                        OFFICE: {element.location}
                                         </div>
                                 </div> }
                                 {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                         
                                         Empty
                                         </div>}
                                     </div>
                                 </div> )
                        })} </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"FRI",2).map(element=>{return(
                                     <div className="flex items-center">
                                     <div className="flex-shrink-0 h-10 w-10">
                                     </div>
                                     <div className="ml-4">
                                     {element.assignedMemberID && <div>
                                         <div className="text-xs text-gray-500 font-bold">
                                         
                                         Staff ID: {element.output.assignedMemberID}
                                         </div>
                                         <div className="text-xsfont-medium text-gray-900 font-bold">
                                          Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                         </div>
                                             <div className="text-xs text-gray-500 font-bold">
                                        OFFICE: {element.location}
                                         </div>
                                 </div> }
                                 {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                         
                                         Empty
                                         </div>}
                                     </div>
                                 </div> )
                        })}</th>
                        </tr>
                        
                        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 bg-gray-800 uppercase tracking-wider">third</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div>
                        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">
                        {getscheduleinfo(element.courseSchedule,"SAT",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}
                     </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"SUN",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"MON",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"TUE",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"WED",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"THU",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })} </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"FRI",3).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                        </tr>
                        
                        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 bg-gray-800 uppercase tracking-wider">Fourth</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div>
                        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">
                        {getscheduleinfo(element.courseSchedule,"SAT",4).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}
                     </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"SUN",4).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"MON",4).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"TUE",4).map(element=>{
                            return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"WED",4).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"THU",4).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> ) 
                        })} </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"FRI",4).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                        </tr>
                        
                        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 bg-gray-800 uppercase tracking-wider">Fifth</th>
                            <div className="py-5 black">
                        {/* <div className="border-t border-gray-200"></div> */}
                        </div>
                        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">
                        {getscheduleinfo(element.courseSchedule,"SAT",5).map(element=>{
                             return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}
                     </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"SUN",5).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"MON",5).map(element=>{
                             return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"TUE",5).map(element=>{
                               return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"WED",5).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{getscheduleinfo(element.courseSchedule,"THU",5).map(element=>{
                             return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> ) 
                        })} </th>
                            <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {getscheduleinfo(element.courseSchedule,"FRI",5).map(element=>{
                              return(
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                </div>
                                <div className="ml-4">
                                {element.assignedMemberID && <div>
                                    <div className="text-xs text-gray-500 font-bold">
                                    
                                    Staff ID: {element.output.assignedMemberID}
                                    </div>
                                    <div className="text-xsfont-medium text-gray-900 font-bold">
                                     Staff Assigned: {element.assignedMemberName &&element.assignedMemberID} {!element.assignedMemberName && "Empty"}
                                    </div>
                                        <div className="text-xs text-gray-500 font-bold">
                                   OFFICE: {element.location}
                                    </div>
                            </div> }
                            {!element.assignedMemberID && <div className="text-xs text-gray-500">
                                    
                                    Empty
                                    </div>}
                                </div>
                            </div> )
                        })}</th>
                        </tr>
                        </tbody>
                        </div>)
        }
    )
    }
        </table>
        }
    
    </div>
                       
                    </div>
            
            
                    
            
            
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button onClick={handleview}type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
export default HodViewTeachingAssignment 






