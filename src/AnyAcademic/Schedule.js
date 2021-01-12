import React,{useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';   
import axios from "axios";
import  '../Components/Navbar.css';



function Schedule(props) {
    const history = useHistory();

    const [state, setState] = useState(
        {
            schedule:[]
        }
      );
    
    
    // component did mount
    useEffect(()=>{
        axios.get("http://localhost:8080/anyAcademic/schedule", {params:{token:this.props.realToken}})
        .then((res)=>{
            console.log(res.data);
            setState({schedule:res.data})
        })
    },[])

    const daysOfWeek = {sat:0,sun:1,mon:2,tue:3,wed:4,thu:5,fri:6};
    
    const mapSchedule = ()=>{
        let schedule =
        [ 
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ]
        state.forEach((courseSlot)=>{
            let day = courseSlot.day;
            let time = courseSlot.time;
            let loc = courseSlot.location;
            let courseName = courseSlot.courseName;
            
            schedule[time-1][daysOfWeek[day]] = {
                    location: loc,
                    courseName: courseName
            }
        })
        return schedule;
    }

    /// to be continue

    return(
    <div>

    <table>
    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">slot\day</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Saturday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Sunday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Monday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Tuesday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Wednesday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Thursday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Friday</th>

    </tr>
    <hr></hr>

    <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">First</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 1 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 1</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 1</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 1</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 1</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 1 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 1</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">second</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 2 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 2</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 2</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 2</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 2</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 2 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 2</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">third</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 3 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 3</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 3</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 3</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 3</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 3 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 3</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">fourth</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 4 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 4</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 4</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 4</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 4</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 4 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 4</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">fifth</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 5 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 5</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 5</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 5</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 5</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">row 5 </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> row 5</th>

    </tr>

    </table>

    </div>
    )
                
}
export default Schedule 