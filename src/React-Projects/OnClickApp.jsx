import React, { useState } from "react";

const OnClickApp = () => {
  const color = "#8e44ad";
  const [bg, setBg] = useState(color);
  const [name, setName] = useState("Click Me!");

  const bgChange = () => {
    //console.log("Clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("Thank you :)");
  };

  const bgBack = () => {
    setBg(color);
    setName("Click Me!");
  };
  return (
    <>
      <div className="clickApp-div" style={{ backgroundColor: bg }}>
        <button
          className="btn-clickApp"
          onClick={bgChange}
          onDoubleClick={bgBack}
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default OnClickApp;
