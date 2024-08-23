import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddtoCart from "./AddToCart";
import Header from "./Header";
import Home from "./Home";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Home></Home>
        <Routes>
          <Route path="/addtocart" element={<AddtoCart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;






