import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

var IncDec = () => {
  const [num, setnum] = useState(0);

  const inc = () => {
    setnum(num + 1);
  };

  const dec = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
      alert("Sorry, 0 limit reached");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1 style={{ marginTop: "180px" }}>{num}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Tooltip title="Add">
              <Button onClick={inc} className="btn-green">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Del">
              <Button onClick={dec} className="btn-red">
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncDec;
