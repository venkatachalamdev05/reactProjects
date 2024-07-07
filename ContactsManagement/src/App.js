import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import AddContacts from "./AddContacts.js";


function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/add" element={<AddContacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App;








