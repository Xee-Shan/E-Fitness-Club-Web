import React, { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UpdateMeditation(props) {
  const [productId, setProductId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image,setImage]=useState();
  const [audio,setAudio]=useState();
  const [previewImage,setPreviewImage]=useState("");
  const [cloudinaryImageId,setCloudinaryImageId]=useState("");
  const [cloudinaryAudioId,setCloudinaryAudioId]=useState("");
  const [imageURL,setImageURL]=useState("");
  const [audioURL,setAudioURL]=useState("");
  
  useEffect(() => {
    async function fetchData() {
      try{
      const response = await axios.get("http://localhost:5000/meditation/get/"+props.match.params.id, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
         console.log(response.data);
         setTitle(response.data.title);
         setDescription(response.data.description);
         setImageURL(response.data.imageURL);
         setAudioURL(response.data.audioURL);
         setCloudinaryAudioId(response.data.cloudinary_audio_id);
         setCloudinaryImageId(response.data.cloudinary_image_id);

    }
    catch(err){
      console.log(err);
    }
    }
    fetchData();
  }, []);

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
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              <br/>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                value={title}
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
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-4">
                <MDBBtn
                  onClick={() => btnClicked(productId)}
                  color="unique"
                  type="submit"
                >
                  Edit Product
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}
