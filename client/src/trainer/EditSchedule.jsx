import React,{useEffect,useState} from 'react'
import Axios from "axios";

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
      
    return (
        <div>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Day
              </label>
              <input
                type="text"
                value={day}
                
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
                
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
        </div>
    )
}
