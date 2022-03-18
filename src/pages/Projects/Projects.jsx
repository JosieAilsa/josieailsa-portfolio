import "./Projects.scss";
import Carousel from "../../containers/Carousel/Carousel";

const Projects = () => {
  return (
    <div id="projects"className="projects page">
        <h3 className="projects__heading  page__heading">My Projects</h3>
        <Carousel />
    </div>
  );
};

export default Projects;
