import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdatedTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdatedTime, 1000);

  return (
    <>
      <div className="Time-div">
        <h1>{ctime}</h1>
      </div>
    </>
  );
};
export default DigitalClock;
