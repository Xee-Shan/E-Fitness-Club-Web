import React,{useState,useEffect} from 'react';
import Navbar from "../Navbar/Navbar";
import axios from "axios";
export default function GetVideos() {
    const [data,setData]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get("http://localhost:5000/training/getVideos", {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
          });
          console.log(response.data);
          setData(response.data);
        }
        fetchData();
      }, []);

    return (        
        <div>
            <Navbar/>
        {
            data.map((data,i)=>{

                return <div key={i}>
                 <video width="750" height="500" controls >
      <source src={data.videoURL}/>
     </video>
     <br/>
     <b>{data.uploaderName}</b>
     <h2>{data.title}</h2>
     <h4>
         {data.targetArea} 
        <br/>
        {data.equipment}

     </h4>
     <p>
         {data.description}
     </p>

     </div> 
            })
        }
            
        </div>
    )
}
