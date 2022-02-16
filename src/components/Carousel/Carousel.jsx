import Button from "../Button/Button";
import Arrow from "../../assets/images/icons/arrow.svg"
import "./Carousel.scss"
import CarouselItem from "../CarouselItem/CarouselItem";
import {projects} from "../../assets/data/data"

const Carousel = () => {
    const projectsCarouselJSX = projects.map((project, index) => {
        return <CarouselItem key = {index} image = {project.image} number={index} title = {project.projectTitile} desc = {project.description}/>
    })
    return (
    <section className="carousel">
        <div className="carousel__container">
            {projectsCarouselJSX}
        </div>
        <div className="carousel__buttons">
            <Button classNames="carousel__button" content={<img src={Arrow} alt="" />}/>
            <Button classNames="carousel__button" content={<img src={Arrow} alt="" />}/>    
        </div>
    </section> 
     );
}
 
export default Carousel;