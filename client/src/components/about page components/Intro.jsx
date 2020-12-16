import React from "react";
import Background from "./Images/fit.jpg";
import {
  MDBView,
  MDBMask,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact";
const Intro = () => {
  return (
    <>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                width="100%"
                src="https://www.pixel4k.com/wp-content/uploads/2018/10/kickboxing-4k_1538786810.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "contain, cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundPosition: "top left",
          overflow: "hidden",
        }}
      ></div>
    </>
  );
};

export default Intro;
