import React from "react";
import { Link } from "react-router-dom";
export const Start = (props) => {
  return (
    <div className="start-wrapper">
      <nav className="start">
        <Link to="/easy/1"> 
          <div className="start-button" onClick={props.setReset()}>Start</div>
        </Link>
      </nav>
    </div>
  );
};
