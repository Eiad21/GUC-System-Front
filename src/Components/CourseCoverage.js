import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'

export default function CourseCoverage(props) {
    const test=true;
    const [state, setState] = useState(
        {
          arr:{}
        }
      );
    useEffect(async() => {
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
            const newstate={...state};
            newstate.arr=data;
            setState(newstate);
            return;
        }
        try {
            const res = await axios.get('http://localhost:8080/instructorRoutes/viewCoverages',{params:{token:props.realToken}});
            
            const newstate={...state};
            newstate.arr=res.data;
            setState(newstate);
          } catch (e) {
            const newstate={...state};
            newstate.arr=e;
            setState(newstate);
          }
        
    }, []);

    
      const columns = [
        {
          key: 'CourseName',
          title: 'Course Name',
          dataKey: 'CourseName',
          width: 150
        },
        {
          key: 'Coverage',
          title: 'Coverage',
          dataKey: 'Coverage',
          width: 100,
          align: Column.Alignment.CENTER
        }]
    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center" /*style={{backgroundColor:'black'}}*/>
            <BaseTable data={state.arr} width={300} height={600} columns={columns}>
            
            
            </BaseTable>
             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
