import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Layout from "../../components/Layout/Layout";
import Contact from "../Contact/Contact"

const Main = () => {
  return (
    <div>
      <Layout>
          <Home/>
          <Projects/>
          <Skills/>
          <Contact/>  
      </Layout>
    </div>
  );
};

export default Main;
