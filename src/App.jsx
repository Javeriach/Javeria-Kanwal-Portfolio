import React from "react";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./components/Body";

// import Features from "./components/Features";
// import Portfolio from "./components/Portfolio";
import Toaster from "react-hot-toast";
import Projects from "./components/Projects";

function App() {
  return (
    <>
         <Toaster position="top-right" reverseOrder={false} />
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
               
          </Route>
          <Route path="/projects" element={<Projects/>}>
               
        </Route>
     
      </Routes>
     
    </BrowserRouter>
    </>
   
   
  );
}

export default App;

