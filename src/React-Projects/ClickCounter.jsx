import React, { useState } from "react";

const ClickApp = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  return (
    <>
      <div className="clickApp-div">
        <h1> {count} </h1>
        <button className="btn-clickApp" onClick={IncNum}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default ClickApp;
