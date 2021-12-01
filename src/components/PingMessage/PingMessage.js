import React from "react";



import paw from "../../images/paw.png";
import herologo from "../../images/herologo.png";

import Home from "../../pages";
import {
  TopLine,
  Heading
} from './PingMessageElements';

const ping = ({alt}) => {
  return (
    
    <div
    className="row pt-5 pt-lg-0"
    style={{ background: "#000000", minHeight: "100vh" }}
    id={Home}
  >
    <div className="col-lg-3 d-flex order-2 order-lg-1 px-0">
      <img
        src={paw}
        alt={alt}
        className="w-100 h-100"
        style={{
          objectFit: "contain",
          objectPosition: "bottom center",
          maxHeight: "100vh",
        }}
      />
    </div>

    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center order-1 order-lg-2 mt-5 mt-lg-0 pb-xs-1">
      <TopLine>PUBLIC SAFETY HAS BEEN ALERTED!</TopLine>
      <Heading>
        {" "}
        <img
          src={herologo}
          alt={alt}
          className="w-100 h-100"
          style={{
            objectFit: "contain",
            objectPosition: "bottom center",
            maxHeight: "100vh",
          }}
        />
      </Heading>
    </div>
  </div>
    
  );
};

export default ping;