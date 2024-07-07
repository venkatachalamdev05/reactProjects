import React, { useContext, useEffect, useState } from "react"
import { Mybasket } from "./App";
import './App.css'
import { Button } from "react-bootstrap";
import Timer from "./Timer.js";


const Quiz = (props) => {
  const ValueData = useContext(Mybasket);
  const [questionNumber, setQuestionNumber] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)




  function navigate() {
    if (buttonClicked == false) {
      alert("Select Answer")
    } else {
      ValueData.setNavigation("Result");
      setButtonClicked(false)
    }
  }


  const dataSet =
    [
      {
        question: "What is React primarily used for?",
        A: "Building mobile apps",
        B: "Server-side processing",
        C: "Data analysis",
        D: "Building user interfaces",
        answer: "D",
      },
      {
        question: "What are Props in React?",
        A: "Data passed from a parent component to a child component",
        B: "Internal state of a component",
        C: "External libraries used in React",
        D: "Functions inside a component",
        answer: "A",
      },
      {
        question: "A functional component in React is...",
        A: "A class that extends React.Component",
        B: "An HTML element",
        C: "A method inside a class component",
        D: "A function that returns a React element",
        answer: "D",
      },
    ]

  function nextQuestion() {
    if (buttonClicked == false) {
      alert("Select Answer")
    } else {
      setQuestionNumber(questionNumber + 1)
      setButtonClicked(false)
    }

  }

  function previousQuestion() {
    setQuestionNumber(questionNumber - 1)
  }

  function checkAnswer(value) {
    setButtonClicked(true)
    if (dataSet[questionNumber].answer == value) {
      ValueData.setScore(ValueData.score + 1)
    }

  }

  return (

    <div className="quizDiv">
       {props.children}
      <div className="quizdiv2">
        <p>{questionNumber + 1 + ".)"} {dataSet[questionNumber].question}</p>
        <p><Button variant="outline-primary" onClick={() => checkAnswer("A")}>{dataSet[questionNumber].A}</Button></p>
        <p><Button variant="outline-primary" onClick={() => checkAnswer("B")}>{dataSet[questionNumber].B}</Button></p>
        <p><Button variant="outline-primary" onClick={() => checkAnswer("C")}>{dataSet[questionNumber].C}</Button></p>
        <p><Button variant="outline-primary" onClick={() => checkAnswer("D")}>{dataSet[questionNumber].D}</Button></p>
      </div>

      {
        dataSet.length - 1 == questionNumber ?
          <>
            {questionNumber > 0 && <Button variant="primary" onClick={previousQuestion}>Previous</Button>}
            <Button onClick={navigate} variant="primary" className="ms-1">Check Result</Button>
          </> :
          <>
            {questionNumber > 0 && <Button variant="primary" onClick={previousQuestion}>Previous</Button>}
            <Button onClick={nextQuestion} variant="primary" className="ms-1">Next</Button>
          </>
      }

    </div>
  )
};

export default Quiz;
