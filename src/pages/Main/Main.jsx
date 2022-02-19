import Home from "../Home/Home";
import Layout from "../../components/Layout/Layout"
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills"

const Main = () => {
    return (
        <Layout>
            <Home/>
            <Projects/>
        </Layout>
    );
}
 
export default Main;