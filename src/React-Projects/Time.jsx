import React, { useState } from "react";

const Time = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
  };

  return (
    <>
      <div className="Time-div">
        <h1> {ctime}</h1>
        <button onClick={UpdateTime} className="btn-Time">
          get time
        </button>
      </div>
    </>
  );
};
export default Time;
