import "./Projects.scss";
import Carousel from "../../containers/Carousel/Carousel";
import Layout from "../../components/Layout/Layout";

const Projects = () => {
  return (
    <div id="projects"className="projects page">
      <Layout>
        <h2 className="projects__heading">My Projects</h2>
        <Carousel />
      </Layout>
    </div>
  );
};

export default Projects;
