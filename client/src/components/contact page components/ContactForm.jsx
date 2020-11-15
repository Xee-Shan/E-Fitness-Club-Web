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
  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [subject, setSubject] = useState([""]);
  const [message, setMessage] = useState([""]);
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    if (data === "") {
      window.Error("Enter fields");
    }

    Axios.post("http://localhost:5000/contact/form", data)
      .then((res) => {
        setSent(true);
        resetForm();
        window.alert("Message Sent");
      })
      .catch(() => {
        console.log("Message Not Sent");
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <MDBContainer>
      <br />
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
                  <MDBBtn color="blue" onClick={handleSubmit}>
                    Submit
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <br />
    </MDBContainer>
  );
};

export default Contactform;
