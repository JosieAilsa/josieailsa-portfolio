import "./Projects.scss";
import Carousel from "../../containers/Carousel/Carousel";
import { carouselData } from "../../assets/data/carouselData";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <div id="projects" className="page">
      <h3 className="projects__heading  page__heading">Personal Projects</h3>
      <Carousel carouselData={carouselData} />
      <Footer />
    </div>
  );
};

export default Projects;
