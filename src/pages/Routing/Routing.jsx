import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
      <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/projects" element ={<Projects/>}/>
      </Routes>
  );
};

export default Routing;
