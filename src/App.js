import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <>
    <div className="app">
    <Header/>
      <BrowserRouter>
      <div className="container">
      <Routes>
        
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails/>} />
            <Route path="*" element={<PageNotFound/>} />
  
    </Routes>
    </div>
       </BrowserRouter>
       <Footer/>
       </div>
       </> 

  );
}

export default App;