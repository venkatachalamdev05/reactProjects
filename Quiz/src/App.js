
import Home from "./Home.js";
import Result from "./Result.js";
import Quiz from "./Quiz.js";
import { createContext, useState } from "react";
import Timer from "./Timer.js";

export const Mybasket = createContext();


function App() {
  const [navigation, setNavigation] = useState("Home") //ConditionalRendering
  const [score, setScore] = useState(0)

  return (
    <div>
      <Mybasket.Provider value={{ navigation, setNavigation, score, setScore }}>
        {navigation == "Home" && <Home></Home>}
        {navigation == "Quiz" && <Quiz><Timer/></Quiz>}
        {navigation == "Result" && <Result></Result>}
      </Mybasket.Provider>
    </div>
  )
}
export default App;


//Parent To Child Data Pass -> Props -> One Value - One Property
// Child To Parent Data Pass -> Props -> One Value - One Property


//Mutiple Value - Multiple Components









