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
    //Handle l and r  carousel button click 
    const onClick = (e) => {
    //If right click and id > 4, go back to start else + 1
        if(e.target.value === "click-right"){
            currentProjectShown === 4 ? setCurrentProjectShown(0):setCurrentProjectShown(currentProjectShown + 1)
            return 
        }
    //If left click and id < 0, go to end else - 1
        currentProjectShown === 0 ? setCurrentProjectShown(4):setCurrentProjectShown(currentProjectShown - 1)
    }
    //Find index of items to be shown either of side item in focus
    const findNextCarouselNum = (currentID, arrayLength) => {
        //If at the last item, give the second last and first
        if(currentID === arrayLength - 1){
            return [(arrayLength - 2),0]
        }
        //If at the first item, give the last and the second
        if(currentID === 0){
            return[(arrayLength - 1),1]
        }
        //Else give items either side 
        return [(currentID-1),(currentID +1)]
    }
    //Destructure to get index of left and right images 
    const [leftSideImg,rightSideImg] = findNextCarouselNum(currentProjectShown, projects.length)

    return (
    <section className="carousel">
        <div className="carousel__container">
            <CarouselImage image={projects[leftSideImg].image} number={1} title={projects[currentProjectShown].title} />
            {projectsCarouselJSX[currentProjectShown]}
            <CarouselImage image={projects[rightSideImg].image} number={3} title={projects[currentProjectShown].title} />
        </div>

        <div className="carousel__buttons">
            <Button classNames="carousel__button" value="click-left" onClick = {onClick}  content={<img src={Arrow} alt="" />}/>
            <Button classNames="carousel__button" value="click-right" onClick = {onClick} content={<img src={Arrow} alt="" />}/>    
        </div>
    </section> 
     );
}
 
export default Carousel;