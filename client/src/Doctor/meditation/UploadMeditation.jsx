import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import ErrorNotice from "../../components/error/ErrorNotice";
import { useHistory } from "react-router-dom";

export default function UploadVideo() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [image, setImage] = useState();
    const [audio,setAudio]=useState();
    const [error,setError]=useState();
    const [loading,setLoading]=useState(false);
    const history=useHistory();


    const btnClicked=async (e)=>{
      try{
        e.preventDefault();
        const formData=new FormData();
        formData.append("audio",audio);
        formData.append("description",description);
        formData.append("title",title);
        setLoading(true);
        const response1=await axios
      .post("http://localhost:5000/meditation/uploadAudio", formData,{
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      let formData2=new FormData();
      formData2.append("image",image);
      const response2=await axios
      .post("http://localhost:5000/meditation/uploadImage", formData2,{
        headers: { "x-auth-token": localStorage.getItem("auth-token"), "Content-type": "multipart/form-data", },
      });
      if(response2.data.success&&response1.data.success){
          alert("Success");
          setLoading(false);
          history.push("/doctor/meditation");
      }
      else{
          setLoading(false);
      }
    }catch(err){
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
    }
    return (
        <div>
            <SideNav />
            <br/> <br/>
      <MDBContainer style={{marginLeft:"25%"}}>
        <MDBRow>
          <MDBCol md="6">
         {loading?(<div>
           <h2>Uploading
            <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  </h2>
  </div>
      )
            : <form>
              <p className="h4 text-center mb-4">Meditation</p>
              {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )} 
                  
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Uplaod Audio
              </label>
              {/* <img src={previewImage} alt="" /> */}
              <input
                type="file"
                accept=".mp3"
                name="file"
                onChange={e=>{
                    setAudio(e.target.files[0]);
                }}
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
            <br/>
              
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Uplaod Image
              </label>
              <img src={previewImage} alt="" />
              <input
                type="file"
                accept=".jpeg, .jpg,.webp, .png"
                name="file"
                onChange={e=>{
                  setImage(e.target.files[0])
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }
                }
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                onChange={e=>setTitle(e.target.value)}
                required
              />
              <br/>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Descrpition
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                  </span>
                </div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  onChange={e=>setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-4">
                <MDBBtn onClick={e=>btnClicked(e)} color="unique" type="submit">
                  Upload
                </MDBBtn>
              </div>
                         </form>
}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </div>
    )
}
