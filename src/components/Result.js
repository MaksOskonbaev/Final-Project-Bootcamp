import React from "react";
import { Link } from "react-router-dom";

export const Result = (props) => {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">Правильные ответы</h2>
      <div className="result-count"> {props.getResult()} из 10 </div>
      <Link to={`/`}>
        <input
          className="result-button"
          type="button"
          value="restart"
        />
      </Link>
    </div>
  );
};
