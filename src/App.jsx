import React, { useEffect } from "react";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Features from "./components/Features";
// import Portfolio from "./components/Portfolio";
import Toaster from "react-hot-toast";
import Projects from "./components/Projects";


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 }); // Animation duration set to 1000ms (1 second)
  
    return () => {
      Aos.refreshHard(); // Optional: Resets all animations on unmount
    };
  }, []);

  
  
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

