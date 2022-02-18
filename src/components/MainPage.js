import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <section className="App">
        <div class="main">
          <Link to="/">MAIN</Link>
        </div>
        <div class="Easy">
          <Link to="/easy">Test</Link>
        </div>
      </section>
    </>
  );
};

export default MainPage;
