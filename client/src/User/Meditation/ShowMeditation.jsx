import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableBody, MDBContainer } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
export default function ShowMeditation() {
  const history = useHistory();
  const [meditation, setMeditation] = useState([]);
  
  useEffect(() => {
    let mounted=true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/meditation/getAll", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if(mounted){
      setMeditation(response.data);
      }
    }
    
    fetchData();
     return () => mounted = false;
  }, [meditation]);

  const btnClicked=(id)=>{
    history.push("/user/meditationDetail/"+id);

  }
    return (
        <div>
          <NavBar/>
          <br/>
            <MDBContainer>
        <h2>List of Meditation : </h2>
        {meditation.length === 0 ? (
          <h2>Nothing added yet...</h2>
        ) : (
            <MDBTable>
              {meditation?.map((meditation, i) => (
                <MDBTableBody key={i}>
                  <tr onClick={()=>btnClicked(meditation._id)} style={{cursor:"pointer"}}>
                    <td><img style={{ height: "80px"}} src={meditation.imageURL} className="img-fluid rounded"
                      alt="..." /></td>
                    <td style={{textAlign:"center"}}><h3>{meditation.title}</h3></td>
                    <td style={{textAlign:"center"}}><h5>{meditation.uploaderName}</h5></td>
                  </tr>
                </MDBTableBody>
              ))}
            </MDBTable>
          )}
      </MDBContainer>

        </div>
    )
}
