import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory } from 'react-router-dom';

export default function StaffDep(props) {
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
            const res = await axios.get('http://localhost:8080/instructorRoutes/viewDepartmentStaff');
            
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
              }
    ]

    return (
        // !Array.isArray(state.arr)?(<p className="a" align="center">{(!state.arr || !state.arr.res || !state.arr.res.data)?'Access Denied':state.arr.res.data}</p>)
        // :
            <div align="center" /*style={{backgroundColor:'black'}}*/>
            <BaseTable data={state.arr} width={800} height={600} columns={columns}>

            
            </BaseTable>
             </div>
            // ((state.arr).map((todo)=>(
            //     <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
            // ))
    
    )
}
