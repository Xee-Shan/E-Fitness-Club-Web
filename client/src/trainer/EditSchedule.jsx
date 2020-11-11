import React,{useEffect,useState} from 'react'
import Axios from "axios";
import { MDBBtn } from "mdbreact";

export default function EditSchedule(props) {
    const [day,setDay]=useState();
    const [area,setArea]=useState();
    const [data,setData]=useState();
    const fetchProgramDetail = async () => {
         await Axios.get(
          "http://localhost:5000/training/get/"+props.match.params.id
        )
        .then(res=>{
            setData(res.data);
            setDay(res.data.exercise[props.match.params.index].day);
            setArea(res.data.exercise[props.match.params.index].area);
        });
      };
      console.log(data);
      useEffect(() => {
        fetchProgramDetail();
      }, [props]);
      function edit(){
          const data={
              day:day,
              area:area
          }
        Axios.put("http://localhost:5000/training/edit/schedule/" + props.match.params.id+"/"+props.match.params.index, data,{headers:{"x-auth-token":localStorage.getItem("auth-token")}});
      }
    return (
        <div>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Day
              </label>
              <input
                type="text"
                value={day}
                onChange={(e)=>setDay(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Area
              </label>
              <input
                type="text"
                value={area}
                onChange={(e)=>setArea(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
               <MDBBtn
                  onClick={edit}
                  color="unique"
                  type="submit"
                >
                  Edit
                </MDBBtn>
        </div>
    )
}
