import React, { useContext, useEffect } from "react"
import { Mybasket } from "./App";
import { Button } from "react-bootstrap";



const Home = (props) => {
  const valueData = useContext(Mybasket);
  function navigatedata() {
    valueData.setNavigation("Quiz")
  }

  return (
    <div className="startQuiz">
      <Button onClick={navigatedata} variant="outline-primary" >Start Quiz</Button>
    </div>
  )
};

export default Home;
