import React from "react";
import web from "../src/images/about.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Grow your Buisness with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      ></Common>
    </>
  );
};
export default About;
