import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import './App.css'
import MoviesWrapper from "./components/MoviesWrapper";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" width={'105px'} alt="Banner-image"></img>
          <Link to="/login" className="link">TV Shows</Link>
          <Link to="/movies" className="link">Movies</Link>
          <Link to="/login" className="link">Recently Added</Link>
          <Link to="/login" className="link">My List</Link>
          <Link to="/login" className="link">Login</Link>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<MoviesWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;










