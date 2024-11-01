import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Layout from "../../components/Layout/Layout";
import Contact from "../Contact/Contact";
const Main = () => {
  return (
    <main>
      <Layout>
        <Home />
        <Contact />
        <Projects />
      </Layout>
    </main>
  );
};

export default Main;
