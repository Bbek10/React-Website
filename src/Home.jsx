import React from "react";
import web from "../src/images/home.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to Home"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default Home;
