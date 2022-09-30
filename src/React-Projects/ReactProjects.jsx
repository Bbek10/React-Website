import React from "react";
import ReactProjectsCard from "./ReactProjectsCard";

const ReactProjects = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> My React Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
              <ReactProjectsCard />;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReactProjects;
