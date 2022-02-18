import Button from "../../components/Button/Button";
import Arrow from "../../assets/images/icons/arrow.svg"
import "./Carousel.scss"
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import {projects} from "../../assets/data/data"
import { useState } from "react";
import CarouselImage from "../../components/CarouselImage/CarouselImage";

const Carousel = () => {
    const [currentProjectShown, setCurrentProjectShown] = useState(0)
    const projectsCarouselJSX = projects.map((project, index) => {
        return <CarouselItem key = {index} image = {project.image} number={index} title = {project.projectTitile} description = {project.description}/>
    })
    const findNextCarouselNum = (currentID) => {
        if(currentID === 4){
            return [3,1]
        }
        if(currentID === 0){
            return[5,1]
        }
        return [(currentID-1),(currentID +1)]
    }
    //Handle l and r  carousel button click 
    const onClick = (e) => {
        if(e.target.value === "click-right"){
            currentProjectShown === 4 ? setCurrentProjectShown(0):setCurrentProjectShown(currentProjectShown + 1)
            return 
        }
        currentProjectShown === 0 ? setCurrentProjectShown(4):setCurrentProjectShown(currentProjectShown - 1)
    }
  console.log(findNextCarouselNum(currentProjectShown))

    return (
    <section className="carousel">
        <div className="carousel__container">
            <CarouselImage image={projects[currentProjectShown].image} number={1} title={projects[currentProjectShown].title} />
            {projectsCarouselJSX[currentProjectShown + 1]}
            <CarouselImage image={projects[currentProjectShown].image} number={3} title={projects[currentProjectShown].title} />
        </div>

        <div className="carousel__buttons">
            <Button classNames="carousel__button" value="click-left" onClick = {onClick}  content={<img src={Arrow} alt="" />}/>
            <Button classNames="carousel__button" value="click-right" onClick = {onClick} content={<img src={Arrow} alt="" />}/>    
        </div>
    </section> 
     );
}
 
export default Carousel;