import Home from "../Home/Home";
import Layout from "../../components/Layout/Layout"
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills"
import CarouselTest from "../../components/CarouselTest/CarouselTest";

const Main = () => {
    return (
        <Layout>
            <Home/>
            <Projects/>
            <CarouselTest/>
        </Layout>
    );
}
 
export default Main;