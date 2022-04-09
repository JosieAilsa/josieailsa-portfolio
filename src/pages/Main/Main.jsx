import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Layout from "../../components/Layout/Layout";
import Contact from "../Contact/Contact"
const Main = () => {
  return (
    <main>
      <Layout>
          <Home/>
          <Projects/>
          <Skills/>
          <Contact/>  
      </Layout>
    </main>
  );
};

export default Main;
