import Button from "../Button/Button";
import Arrow from "../../assets/images/icons/arrow.svg"
import "./Carousel.scss"
import CarouselItem from "../CarouselItem/CarouselItem";
import {projects} from "../../assets/data/data"
import { useState } from "react";

const Carousel = () => {
    const [currentProjectShown, setCurrentProjectShown] = useState(0)
    console.log(currentProjectShown)
    const projectsCarouselJSX = projects.map((project, index) => {
        return <CarouselItem key = {index} image = {project.image} number={index} title = {project.projectTitile} description = {project.description}/>
    })

    const onRightClick = () => {
        console.log("red")
        setCurrentProjectShown(currentProjectShown + 1)
    }

    return (
    <section className="carousel">
        <div className="carousel__container">
            {projectsCarouselJSX[currentProjectShown]}
        </div>
        <div className="carousel__buttons">
            <Button classNames="carousel__button" content={<img src={Arrow} alt="" />}/>
            <Button classNames="carousel__button" onClick = {onRightClick} content={<img src={Arrow} alt="" />}/>    
        </div>
    </section> 
     );
}
 
export default Carousel;