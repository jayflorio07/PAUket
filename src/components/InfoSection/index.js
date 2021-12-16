import React from "react";

import { TopLine, Heading, Subtitle } from "./InfoElements";

import pauketlogo2 from "../../images/pauketlogo2.png";

import { Button } from "../ButtonElements3.js";



const InfoSection = ({ alt }) => {
  return (
    <div
      id="about"
      style={{ background: "#f5ad4b" }}
      className="text-white row py-5"
    >
      <div className="col-12 px-0">
        <div className="container-lg">
          <div className="row px-4 justify-content-center align-items-center">
            <div className="col-lg-6 mb-4 mb-md-0">
              <img
                src={pauketlogo2}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
              <TopLine>ABOUT PAUKET </TopLine>
              <Heading> ADELPHI'S NAVIGATION APP</Heading>
              <Subtitle>
                {" "}
                The PAUket application introduces an innovative, interactive
                navigation system. The PAUket application provides
                students/faculty potential to engage with their own college
                campus. Students/faculty will have access to the navigation
                system through a website as well as mobile access.{" "}
              </Subtitle>
              <Button Link to ={{ pathname: "https://www.adelphi.edu/"}} target="_blank" aria-label="adelphi">VISIT ADELPHI</Button>
              <Button Link to ={{ pathname: "https://login.adelphi.edu/cas/login?service=https%3A%2F%2Fportal.adelphi.edu%2F"}} target="_blank" aria-label="adelphi">ECAMPUS PORTAL</Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;