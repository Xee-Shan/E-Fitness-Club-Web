import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import SideNav from "./SideNav/SideNav";
import FormData from "form-data";
import ErrorNotice from "../components/error/ErrorNotice";

export default function UploadVideo() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [image, setImage] = useState();
    const [audio,setAudio]=useState();
    const [loading,setLoading]=useState(false);


    const btnClicked=async (e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("audio",audio);
        formData.append("description",description);
        formData.append("title",title);
        setLoading(true);
        console.log(image);
        console.log(audio);
        const response1=await axios
      .post("http://localhost:5000/meditation/uploadAudio", formData,{
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      const formData2=new FormData();
      formData2.append("image");
      const response2=await axios
      .post("http://localhost:5000/meditation/uploadImage", formData2,{
        headers: { "x-auth-token": localStorage.getItem("auth-token"), 'Content-Type': formData2.type },
      });
      if(response1.data.success&&response2.data.success){
          alert("Success");
          setLoading(false);
      }
      else{
          setLoading(false);
          alert("Unsuccessful");
      }
    }
    return (
        <div>
            <SideNav />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
         {loading?(<div>
            <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  </div>
      )
            : <form>
              <p className="h4 text-center mb-4">Meditation</p>
              {/* {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )} */}
                  
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
                accept=".jpeg, .jpg, .png"
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
