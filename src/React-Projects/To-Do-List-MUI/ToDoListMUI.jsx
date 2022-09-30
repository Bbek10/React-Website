import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const ToDoListMUI = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add an item"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <ol>
            {items.map((value, index) => {
              return <ListCom key={index} text={value} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoListMUI;
