import React, { useContext } from "react"
import { Mybasket } from "./App";

const Result = (props) => {
  const ValueData = useContext(Mybasket);
  return (
    <div>

      <div className="quizDiv">
        <div className="quizdiv2">
          <p className="text-center">**  Your Score Is : {ValueData.score}  **</p>
        </div>
      </div>
    </div>
  )
};

export default Result;
