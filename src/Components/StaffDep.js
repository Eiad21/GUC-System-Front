import React, { useState, useEffect } from 'react';
import "./style.css";
import Table, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import axios from 'axios';

export default function StaffDep(props) {
    const test=false;
    const [state, setState] = useState([]);
    const [texts, setText] = useState([]);
    const [error, setError] = useState('Loading');
    
    async function handleChange(evt,idx){
      console.log(texts);
      console.log(idx);
      console.log(evt.target.value);
      console.log(state);
      texts[idx]=evt.target.value;
      setText(texts.map((item,index) =>{ 
        
        return idx === index 
        ? evt.target.value 
        : item }));
    }
    async function add(memberID,courseName){
      console.log(memberID);
      console.log(courseName);
      console.log(texts);
      try {
        const res = await axios.post('http://localhost:8080/instructorRoutes/courseAcadMember'  ,{courseName:courseName,memberID:memberID},{params:{token:props.realToken}});
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
            const res=await axios.get('http://localhost:8080/instructorRoutes/viewDepartmentStaff',{params:{token:props.realToken}});
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
            },
            {
                key: 'dayoff',
                title: 'Day off',
                dataKey: 'dayoff',
                width: 150,
                align: Column.Alignment.CENTER
              },
        
              {
                title: 'Add the Staff member to the Course',
                key: 'action',
                width: 400,
                cellRenderer: ({ rowData }) => (
                  <button
                    onClick={() => {
                      add(rowData.id,texts[rowData.idx]);
                    }}
                    className="submit"
                  >
                    Add
                  </button>
                  
                )
              },
        
              {
                title: 'Type the Course Name',
                key: 'action2',
                width: 400,
                cellRenderer: ({ rowData }) => (
                  
                <input type="text" data-test="course" placeholder="Course" onChange={(e)=>{handleChange(e,rowData.idx)}}/>
                  
                )
              }
    ]
                 
    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center" /*style={{backgroundColor:'black'}}*/>
        <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
            <Table data={state} width={800} height={600} columns={columns}/>

             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
