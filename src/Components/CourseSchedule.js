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
    const [state, setState] = useState([]);
    const [texts, setText] = useState([]);
    const [error, setError] = useState('Loading');
    async function handleChange(evt,idx){
      texts[idx]=evt.target.value;
      setText(texts.map((item,index) =>{ 
      
      return idx === index 
      ? evt.target.value 
      : item }));
      
    }
      async function update(memberID,courseName,slotID){
        console.log(memberID);
        console.log(courseName);
        console.log(slotID);
        console.log(texts);
        try {
          const res = await axios.put('http://localhost:8080/instructorRoutes/slotAcadMember'  ,{courseName:courseName,memberID:memberID,slotID:slotID},{params:{token:props.realToken}});
          console.log('d7k');
          setError('Done Successfully');
        } catch (e) {
          console.log(e.response.data);
          if(e && e.response && e.response.data){
            setError(e.response.data);
          }
          else{
            setError('Access Denied');
          }
        }
        // console.log(state);
      }

      async function remove(courseName,slotID){
        try {
          const res = await axios.delete(`http://localhost:8080/instructorRoutes/slotAcadMember/${courseName}/${slotID}`,{params:{token:props.realToken}});
          console.log('d7k');
          setError('Done Successfully');
        } catch (e) {
          console.log(e.response.data);
          if(e && e.response && e.response.data){
            setError(e.response.data);
          }
          else{
            setError('Access Denied');
          }
        }
        // console.log(state);
      }

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
          const method = async()=>{
          const res = await axios.get(`http://localhost:8080/instructorRoutes/viewOneCourseAssignments/${courseName}`,{params:{token:props.realToken}});
          const arr=[];
          for(var i=0;i<res.data.length;i++){
            res.data[i].idx=i;
            arr.push(' ');
          }
          setText(arr);
          setState(res.data);
          setError(''); 
        }
        method();

        } catch (e) {
          setState([]);
          if(e && e.response && e.response.data){
            setError(e.response.data);
          }
          else{
            setError('Access Denied');
          }
          setText([]);
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
          title:' Remove Assignment of the current TA',
          key: 'action',
          width: 200,
          align: Column.Alignment.CENTER,
          frozen: Column.FrozenDirection.RIGHT,
          cellRenderer: ({ rowData }) => (
            <button
              onClick={() => {
                remove(courseName,rowData._id);
              }}
              className="submit"
            >
              Remove
            </button>
          ),
        },
        
        {
          title: 'Type the TA ID',
          key: 'action3',
          width: 400,
          cellRenderer: ({ rowData }) => (
            
          <input type="text" data-test="course" placeholder="Course" onChange={(e)=>{handleChange(e,rowData.idx)}}/>
            
          )
        },
        
        {
          key: 'action77',
          title:'Assign the slot to the TA',
          width: 200,
          align: Column.Alignment.CENTER,
          frozen: Column.FrozenDirection.RIGHT,
          cellRenderer: ({ rowData }) => (
            <button
              onClick={() => {
                update(texts[rowData.idx],courseName,rowData._id);
              }}
              className="submit"
            >
              Assign
            </button>
          ),
        }
    ]

    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center">
            <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
           <BaseTable data={state} width={900} height={600} columns={columns}>

            
            </BaseTable>
             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
