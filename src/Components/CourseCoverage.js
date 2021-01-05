import axios from 'axios';
import React,{useState} from 'react'
import "./style.css";

export default function CourseCoverage() {
    function all(){
        let data;
        axios.get('http://localhost:8080/instructorRoutes/viewCoverages')
          .then(
              (res) => {
                  console.log(res);
              data=res;
            
          }) 
          .catch((err)=>{
              console.log(err);
              data=err;
              
              
          })
    }

    const [state, setState] = useState(
        {
          arr:all()
        }
      );
    console.log(state.arr);
    return (
            (!Array.isArray(state.arr)?(<p className="a" align="center">Access Denied</p>):
            (([]).map((todo)=>(
            <p className="a">Course {todo.CourseName} has coverage = {todo.Coverage} </p>)
        ))
        
    )
    )
}
