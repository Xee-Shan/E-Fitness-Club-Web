import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import NavBar from "../navbar/Navbar"

const BlogDetail = () => {
    return ( 
        <div>
            <NavBar/><br/>
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    {/* Tile of Blog */}
                    <h2>Title Of Blog</h2>
                    <p>by Auther's Name</p>
                        <hr/>
                    {/* <!-- Date/Time --> */}
                    <p>Posted on Date</p>
                        <hr/>
                        <img classNameName="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                        <hr/>

                        {/* Post Content */}
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
     );
}
 
export default BlogDetail;