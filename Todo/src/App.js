import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";


function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App;








