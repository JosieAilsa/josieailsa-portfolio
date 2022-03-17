import "./Projects.scss";
import Carousel from "../../containers/Carousel/Carousel";
import Layout from "../../components/Layout/Layout";

const Projects = () => {
  return (
    <div id="projects"className="projects page">
      <Layout>
        <h3 className="projects__heading  page__heading">My Projects</h3>
        <Carousel />
      </Layout>
    </div>
  );
};

export default Projects;
