import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EasyQuestions from "../redux/store";
import { useParams } from "react-router-dom";


export const Question = (props) => {
  const history = useParams();
  const currentQuestion = history.questionNum;
  const [answerStatus, setAnswerStatus] = useState(false)
  const [selectAnswer, setSelectAnswer] = useState(false)
  const [ch, setCH] = useState([false, false, false]);

  useEffect (() => {
    const newCh = ch.map((item, index) => {
      return false
    })
    setCH(newCh)
    setSelectAnswer(false)
  },[currentQuestion])
  
  const handleCLick = (e, key) => {
    if(e.target.value === "yes"){
      setAnswerStatus(true)
    }else{
      setAnswerStatus(false)
    }
    const newCh = ch.map((item, index) => {
      if(index === key) {
        return !item
      }
      else { return false}
    })
    setCH(newCh)
    setSelectAnswer(true)
  };
  console.log(currentQuestion)
  console.log( ch  )
  return (
    <div className="test-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2 className="question-title">
          <span>Вопрос {EasyQuestions[currentQuestion - 1].questionNum} :</span>
          {EasyQuestions[currentQuestion - 1].question}
        </h2>
        <div className="questions">
          {EasyQuestions[currentQuestion - 1].q.map((item, index) => {
            return (
              <div className="question-inputs">
                <input
                  onClick={(e) => handleCLick(e, index)}
                  className="question-input"
                  key={index}
                  type="radio"
                  checked={ch[index]}
                  name={`num${currentQuestion}`}
                  value={item.type}
                />
                <label htmlFor="q1">
                  {item.var}
                </label>
              </div>
            );
          })}
        </div>
        {selectAnswer && <div className="btn-next">
          {(+currentQuestion < 10 && (
            <Link to={`/easy/${+currentQuestion + 1}`}>
              <input
                onClick={() => props.getResult(answerStatus)}
                className="question-button"
                type="button"
                value={EasyQuestions[currentQuestion - 1].next}
              />
            </Link>
          )) || (
            <Link to={`/easy/result`}>
              <input
                onClick={() => props.getResult(answerStatus)}
                className="question-button"
                type="button"
                value={EasyQuestions[currentQuestion - 1].next}
              />
            </Link>
          )}
        </div>}
      </nav>
    </div>
  );
};
