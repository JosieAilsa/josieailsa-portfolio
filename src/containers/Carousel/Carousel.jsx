import Button from "../../components/Button/Button";
import Arrow from "../../assets/images/icons/arrow.svg"
import "./Carousel.scss"
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import {projects} from "../../assets/data/data"
import { useState } from "react";

const Carousel = () => {
    const [currentProjectShown, setCurrentProjectShown] = useState(0)
    console.log(currentProjectShown)
    const projectsCarouselJSX = projects.map((project, index) => {
        return <CarouselItem key = {index} image = {project.image} number={index} title = {project.projectTitile} description = {project.description}/>
    })

    const onClick = (e) => {
        if(e.target.value === "click-right"){
            currentProjectShown === 4 ? setCurrentProjectShown(0):setCurrentProjectShown(currentProjectShown + 1)
            return 
        }
        console.log()
        currentProjectShown === 0 ? setCurrentProjectShown(4):setCurrentProjectShown(currentProjectShown - 1)
        
    }

    return (
    <section className="carousel">
        <div className="carousel__container">
            {projectsCarouselJSX[currentProjectShown]}
        </div>
        <div className="carousel__buttons">
            <Button classNames="carousel__button" value="click-left" onClick = {onClick}  content={<img src={Arrow} alt="" />}/>
            <Button classNames="carousel__button" value="click-right" onClick = {onClick} content={<img src={Arrow} alt="" />}/>    
        </div>
    </section> 
     );
}
 
export default Carousel;