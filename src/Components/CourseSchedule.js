import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory,useParams } from 'react-router-dom';

export default function CourseSchedule(props) {
    let { courseName } = useParams();
    const history = useHistory();
    const test=false;
    const [state, setState] = useState(
        {
          arr:[{}]
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
            const res = await axios.get(`http://localhost:8080/instructorRoutes/viewOneCourseAssignments/${courseName}`,{params:{token:props.realToken}});
            
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
          key: 'day',
          title: 'Day',
          dataKey: 'day',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
            key: 'time',
            title: 'Slot',
            dataKey: 'time',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'location',
            title: 'Location',
            dataKey: 'location',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'assignedMemberID',
            title: 'Assigned Member ID',
            dataKey: 'assignedMemberID',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'assignedMemberName',
            title: 'Assigned Member Name',
            dataKey: 'assignedMemberName',
            width: 150,
            align: Column.Alignment.CENTER
          },
        
        {
          key: 'action',
          width: 200,
          align: Column.Alignment.CENTER,
          frozen: Column.FrozenDirection.RIGHT,
          cellRenderer: ({ rowData }) => (
            <button
              onClick={() => {
                history.push(`/CourseSchedule/${rowData.courseName}`);
              }}
              className="submit"
            >
              Slot Assignments
            </button>
          ),
        }
    ]

    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center">
            <BaseTable data={state.arr} width={800} height={600} columns={columns}>

            
            </BaseTable>
             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
