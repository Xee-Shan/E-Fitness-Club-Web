import React, { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

export default function UpdateMeditation(props) {
  const [meditationId, setMeditationId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image,setImage]=useState();
  const [audio,setAudio]=useState();
  const [previewImage,setPreviewImage]=useState("");
  const [previewAudio,setPreviewAudio]=useState("");
  const [cloudinaryImageId,setCloudinaryImageId]=useState("");
  const [cloudinaryAudioId,setCloudinaryAudioId]=useState("");
  const [meditation,setMeditation]=useState({});
  
  useEffect(() => {
    async function fetchData() {
      try{
      const response = await axios.get("http://localhost:5000/meditation/get/"+props.match.params.id, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
        setMeditation(response.data);
         setMeditationId(response.data._id);
         setTitle(response.data.title);
         setDescription(response.data.description);
         setPreviewImage(response.data.imageURL);
         setPreviewAudio(response.data.audioURL);
         setCloudinaryAudioId(response.data.cloudinary_audio_id);
         setCloudinaryImageId(response.data.cloudinary_image_id);
    }
    catch(err){
      console.log(err);
    }
    }
    fetchData();
  },[]);

  const history = useHistory();

  const btnClicked = (id) => {
    const formData=new FormData();
    formData.append("description",description);
    formData.append("title",title);

    axios.put("http://localhost:5000/meditation/update/" + id, formData, {
      headers: {
         "x-auth-token": localStorage.getItem("auth-token"),
         //'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    history.push("/admin/product");
  };
  return (
      <div>
    <SideNav/>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Update Meditation</p>
              <img src={previewImage} alt=""/>
              <input
                type="file"
                accept=".jpeg, .jpg, .png, .webp"
                name="file"
                onChange={(e)=>{
                    setImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }}
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              <br/>
              {previewAudio?
              (<>
              <audio controls><source src={previewAudio} type="audio/mp3" /></audio>
              <input
                type="file"
                accept=".mp3,.wav,.ogg"
                name="file"
                onChange={(e)=>{
                    setAudio(e.target.files[0]);
                    setPreviewAudio(URL.createObjectURL(e.target.files[0]));
                    console.log(previewAudio);
                }}
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              </>):null}
              <br/>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                value={title}
                onChange={e=>setTitle(e.target.value)}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
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
                  value={description}
                  onChange={e=>setDescription(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-4">
                <MDBBtn
                  onClick={() => btnClicked(meditationId)}
                  color="unique"
                  type="submit"
                >
                  Update Meditation
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
  );
}
