import "./Projects.scss";
import Carousel from "../../containers/Carousel/Carousel";
import { carouselData } from "../../assets/data/carouselData";

const Projects = () => {
  return (
    <div id="projects" className="page">
      <h3 className="projects__heading  page__heading">My Projects</h3>
      <Carousel carouselData={carouselData} />
    </div>
  );
};

export default Projects;
