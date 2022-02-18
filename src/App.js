import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Start } from "./components/Start";
import { Question } from "./components/Questions";
import MainPage from "./components/MainPage";
import { Result } from "./components/Result";

const App = () => {
  

  const [result, setResult] = useState(0);
  

  const getResult = status => {
    if (status) {
      setResult(result +  1)
    } else {
      return result
    }
  };

  const setReset = () => {
    setResult(0)
  }

 
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/easy" element={<Start setReset={setReset} />} />
        <Route exact path="/easy/:questionNum" element={<Question getResult={getResult} />} />
        <Route exact path="/easy/result" element={<Result  getResult={getResult}  /> } />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
