import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Layout from "../../components/Layout/Layout";
const Main = () => {
  return (
    <Layout>
        <Home/>
        <Projects/>
        <Skills/>
    </Layout>
  );
};

export default Main;
