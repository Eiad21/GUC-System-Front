import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory,useParams } from 'react-router-dom';

export default function CourseStaff(props) {
    let { courseName } = useParams();
    const history = useHistory();
    const test=false;
    const [state, setState] = useState(
        {
          arr:{instructors:[],TAs:[]}
        }
      );
    useEffect(async() => {
        let data;
        if(test){
            data=[{day:'MON',time:1,location:"C7.7",assignedMemberID:"4343",assignedMemberName:"omar"},
            {day:'MON',time:1,location:"C7.7",assignedMemberID:"4343",assignedMemberName:"omar"},
            {day:'MON',time:1,location:"C7.7"}
        ];
            const newstate={...state};
            newstate.arr=data;
            setState(newstate);

            return;
        }
        try {
            const res = await axios.get(`http://localhost:8080/instructorRoutes/viewCourseStaff/${courseName}`);
            
            const newstate={...state};
            newstate.arr=res.data;
            setState(newstate);
            console.log(res.data);
          } catch (e) {
            const newstate={...state};
            newstate.arr=e;
            setState(newstate);
            console.log(e);
          }
      }, []);
    

    
      const columns = [
        {
          key: 'id',
          title: 'ID',
          dataKey: 'id',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
            key: 'name',
            title: 'Name',
            dataKey: 'name',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'mail',
            title: 'Mail',
            dataKey: 'mail',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
              key: 'office',
              title: 'Office',
              dataKey: 'office',
              width: 150,
              align: Column.Alignment.CENTER
            }
    ]

    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
        <div align="center">
        <div style={{width:1400}}>
        <div style={{width:600},{float:"left"}}>
        <pass>
            Instructors in the course
        </pass>
        <BaseTable data={state.arr.instructors} width={500} height={600} columns={columns}>

                    
        </BaseTable>
        </div>
        <div style={{width:600},{float:"right"}}>
        <pass>
            TAs in the course
        </pass>
        <BaseTable data={state.arr.TAs} width={500} height={600} columns={columns}>

                        
            </BaseTable>

        </div>
        </div>
        <div style={{clear: "both"}}></div>
        </div>
            
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
