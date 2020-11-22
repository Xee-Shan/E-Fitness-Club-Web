import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from "mdbreact";
import Axios from "axios";
import ErrorNotice from "../error/ErrorNotice";

const Contactform = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      await Axios.post("http://localhost:5000/contact/form", data).then(
        (res) => {
          if (res.data.success) {
            console.log("hello world");
            window.alert("Message Sent");
            window.location.reload();
          }
        }
      );
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <MDBContainer>
      <section>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <div>
                  <h2>
                    <MDBIcon icon="envelope" /> Write to us:
                  </h2>
                </div>
                {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )}
                <div>
                  <MDBInput
                    icon="user"
                    label="Your name"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                    value={name}
                    onChange={onChangeName}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Your email"
                    iconClass="grey-text"
                    type="text"
                    id="form-email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Subject"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                    value={subject}
                    onChange={onChangeSubject}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Message"
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                    value={message}
                    onChange={onChangeMessage}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn
                    onClick={handleSubmit}
                    className="blue-gradient"
                    outline
                    color="white"
                  >
                    Submit
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default Contactform;
