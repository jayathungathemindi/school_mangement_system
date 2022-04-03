import React from "react";

import "../../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import{useState, useEffect} from "react"
function AdminDashboard() {
  const[count,setCount]=useState(0)
  useEffect( ()=>{

    axios.get(`http://localhost:3000/user/getStudentCount`).then((res)=>{
      console.log(res.data.count);
      setCount(res.data.count)
    })
  }
    
    
    
  )



  
  return (
    <div>
      <div className="container">
      <div class="card" style={{width: "18rem"}}>
  <div class="card-header">
    count
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{count}</li>
    
  </ul>
</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
