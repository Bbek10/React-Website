import React from "react";
import { NavLink } from "react-router-dom";
import clickcount from "../React-Projects/img/clickcount.png";
import todo from "../React-Projects/img/todo.jpg";
import incdec from "../React-Projects/img/incdec.jpg";

const ReactProjectsCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={clickcount} className="card-img-top" alt="clickcount" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Click Count</h5>
            <p className="card-text">
              {" "}
              Count the number of clicks you've clicked [Using useState() hooks]
              <br />
            </p>

            <NavLink
              to="/React-Projects/clickcounter"
              className="btn btn-primary"
            >
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={clickcount} className="card-img-top" alt="clickcount" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Digital Time</h5>
            <p className="card-text">
              <br /> Digital Time from Local using Hooks{" "}
            </p>

            <NavLink
              to="/React-Projects/DigitalClock"
              className="btn btn-primary"
            >
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={clickcount} className="card-img-top" alt="clickcount" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              Time on Refreshing and Clicking Button
            </h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink to="/React-Projects/time" className="btn btn-primary">
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={clickcount} className="card-img-top" alt="clickcount" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Click Me App</h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink
              to="/react-projects/onclickApp"
              className="btn btn-primary"
            >
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={todo} className="card-img-top" alt="todolist" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">To Do List App</h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink to="/React-Projects/todolist" className="btn btn-primary">
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={incdec}
            className="card-img-top"
            alt="Incrementor Decrementor"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              Incrementor Decrementor
            </h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink to="/React-Projects/incdec" className="btn btn-primary">
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={todo} className="card-img-top" alt="todolist" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              To Do List App Material UI
            </h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink
              to="/React-Projects/todolistmui"
              className="btn btn-primary"
            >
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={todo} className="card-img-top" alt="todolist" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Accordion</h5>
            <p className="card-text"> using useState Hook</p>

            <NavLink to="/React-Projects/accordion" className="btn btn-primary">
              Lets go!
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReactProjectsCard;
