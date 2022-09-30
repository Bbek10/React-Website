import React, { useState } from "react";
import { questions } from "./api";
import "./accordion.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <div className="body-accordion">
        <section className="main-div-accordion">
          <h1 className="h1-accordion">React Native Questions</h1>
          {data.map((curElem) => {
            return <MyAccordion key={curElem.id} {...curElem} />;
          })}
        </section>
      </div>
    </>
  );
};
export default Accordion;
