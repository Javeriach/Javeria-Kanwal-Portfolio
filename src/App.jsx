import { BrowserRouter, Routes, Route } from "react-router-dom";

// internal imports

import Body from "./component/Body/Body";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./component/About/About";
import Projects from "./component/Projects/Project";
import Contact from "./component/Contact/Contact";
import {Toaster } from "react-hot-toast";
function App() {
  return (
    <div className=" font-trebuchet bg-gradientColor1">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<LandingPage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
