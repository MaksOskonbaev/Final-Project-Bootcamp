import React, { useState } from "react";

export default function Radio(props) {
    const [ch, setCH] = useState(false)

    const handleCLick = (e) => {
        props.getResult(e)
        setCH(!ch)
    }

  return (
    <input
      onClick={(e) => handleCLick(e)}
      className="question-input"
      type="radio"
      name={props.name}
      checked={ch}
      value={props.quest.type1}
    />
  );
}
