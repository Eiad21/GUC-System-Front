import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory } from 'react-router-dom';

export default function ViewCourses(props) {
    const history = useHistory();
    const test=false;
    const [state, setState] = useState(
        []
      );
      const [texts, setText] = useState(
        []
      );
      const [error, setError] = useState(
        'Loading'
      );
      const handleChange=(evt,idx)=>{
        console.log(texts);
        texts[idx]=evt.target.value;
        setText(texts.map((item,index) =>{ 
        
        return idx === index 
        ? evt.target.value 
        : item }));
    }
      async function assignCoordinator(memberID,courseName){
        console.log(memberID);
      console.log(courseName);
      console.log(texts);
        try {
          const res = await axios.put(`http://localhost:8080/instructorRoutes/courseCoordinator`  ,{courseName:courseName,memberID:memberID},{params:{token:props.realToken}});
          console.log('d7k');
          setError('Done Successfully');
      } catch (e) {
        console.log("eh");
        setError('Access Denied');
      }
        // console.log(state);
      }
    useEffect(() => {
        let data;
        if(test){
            data=[{CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70},
            {CourseName:'csen701',Coverage:50},{CourseName:'csen705',Coverage:55},{CourseName:'csen721',Coverage:70}];
            return data;
        }
        try {
          const method = async()=>{
            const res = await axios.get('http://localhost:8080/instructorRoutes/viewCoursesAssignments',{params:{token:props.realToken}});
            const arr=[];
            for(var i=0;i<res.data.length;i++){
              res.data[i].idx=i;
              arr.push(' ');
            }
            setText(arr);
            setState((prev)=>res.data);
            setError((prev)=>''); 
          }
          method();
            
          } catch (e) {
            setState([]);
            setError('Access Denied');
            setText([]);
          }
      }, []);
    

    
      const columns = [
        {
          key: 'courseName',
          title: 'Course Name',
          dataKey: 'courseName',
          width: 150,
          align: Column.Alignment.CENTER
        },
        
        {
          key: 'action1',
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
              Slots
            </button>
          ),
        }
        ,
        {
            key: 'action2',
            width: 200,
            align: Column.Alignment.CENTER,
            frozen: Column.FrozenDirection.RIGHT,
            cellRenderer: ({ rowData }) => (
              <button
                onClick={() => {
                  history.push(`/CourseStaff/${rowData.courseName}`);
                }}
                className="submit"
              >
                Staff
              </button>
            ),
          },
        
          {
            title: 'Assign the Staff member to be the Coordinator of the Course',
            key: 'action',
            width: 400,
            cellRenderer: ({ rowData }) => (
              <button
                onClick={() => {
                  assignCoordinator(texts[rowData.idx],rowData.courseName );
                }}
                className="submit"
              >
                Assign
              </button>
              
            ),
          },
    
          {
            title: 'Type the TA ID',
            key: 'action5',
            width: 400,
            align: Column.Alignment.CENTER,
            frozen: Column.FrozenDirection.RIGHT,
            cellRenderer: ({ rowData }) => (
              
            <input type="text" data-test="course" placeholder="Course" onChange={(e)=>{handleChange(e,rowData.idx)}}/>
              
            ),
          }
    ]

    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center" /*style={{backgroundColor:'black'}}*/>
            <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
           
            <BaseTable data={state} width={700} height={600} columns={columns}>

            
            </BaseTable>
             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
