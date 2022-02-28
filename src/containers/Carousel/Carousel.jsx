import Button from "../../components/Button/Button";
import arrowLeft from "../../assets/images/icons/arrow-left.svg"
import arrowRight from "../../assets/images/icons/arrow-right.svg"
import "./Carousel.scss"
import {projects} from "../../assets/data/data"
import { useState } from "react";
import CarouselImage from "../../components/CarouselImage/CarouselImage";
import pinkFlower from"../../assets/images/flowers/flowers-01.svg"
import orangePetals from"../../assets/images/flowers/flowers-07.svg"
import page from "../../assets/images/icons/page.svg"
import code from "../../assets/images/icons/github.svg"

const Carousel = () => {
    //Set the carousel to start and re-render when items change 
    const [currentProjectShown, setCurrentProjectShown] = useState(0)

   
    //Handle l and r carousel button click 
    const onClick = (e) => {
        const leftButton = document.querySelector(".carousel__button-left")
        const rightButton = document.querySelector(".carousel__button-right")
        //If right button click
        if(e.target.dataset.id === "click-right"){
        //If first item remove the inactive class to left btn
        if(currentProjectShown === 0){
            leftButton.classList.toggle("carousel__button--inactive")
        }
        //Get next item 
        const nextProject = currentProjectShown + 1;
        //If this is last item add inactive class to right btn 
        if(nextProject === projects.length -1){
            rightButton.classList.add("carousel__button--inactive")
        }
        //If it is the last project return, doing nothing 
        if(currentProjectShown === projects.length -1){
            return
        }
        //Else increment the projects 
        setCurrentProjectShown(nextProject)
        return; 
        }
        //If left click, get next project 
        const nextProject = currentProjectShown - 1
        //If current project shown is last, remove inactive of right btn 
        if(currentProjectShown === projects.length-1){
            rightButton.classList.toggle("carousel__button--inactive")
        }
        //If at start on nxt project, add the inactive class  
        if(nextProject === 0){
            leftButton.classList.add("carousel__button--inactive")
        }
        //If at start, return and do nothing
        if(currentProjectShown === 0){
            return
        }
        //Else increment the projects 
        setCurrentProjectShown(nextProject);
    }
    
    //Find index of items to be shown either of side item in focus
    const findNextCarouselNum = (currentID, arrayLength) => {
        //If at the last item, give the first and second
        if(currentID === arrayLength - 1){
            return [0, 1]
        }
        //If at the second last item, give the last and the first. 
        if(currentID + 2 > arrayLength -1){
             return [arrayLength -1, 0]
        }

        //Else give next two 
        return [(currentID+1),(currentID +2)]
    }
    //Destructure to get index of left and right images 
    const [leftSideImg,rightSideImg] = findNextCarouselNum(currentProjectShown, projects.length)

    return (
        <section className="carousel">
            <div className="carousel__image-container">
            <img className="carousel__orange-petals"src={orangePetals} alt="" />
            <img className="carousel__pink-flower" src={pinkFlower} alt="" />
                <CarouselImage image={projects[currentProjectShown].image} item={"main"} title={projects[currentProjectShown].projectTitle} />
                <CarouselImage image={projects[leftSideImg].image} item={"two"} title={projects[currentProjectShown].projectTitle} />
                <CarouselImage image={projects[rightSideImg].image} item={"three"} title={projects[currentProjectShown].projectTitle} />
                <CarouselImage image={projects[rightSideImg].image} item={"four"} title={projects[currentProjectShown].projectTitle} />
            </div>
            <div className="carousel__buttons">
                <Button classNames="carousel__button carousel__button-left carousel__button--inactive" onClick = {onClick}  content={<img data-id ="click-left" className ="carousel__button-image" src={arrowLeft} alt="" />}/>
                <Button classNames="carousel__button carousel__button-right" onClick = {onClick} content={<img data-id ="click-right" className ="carousel__button-image" src={arrowRight} alt="" />}/>    
            </div>
            <article className="carousel__copy">
                <h3 className="carousel__header">{`${projects[currentProjectShown].id}. ${projects[currentProjectShown].projectTitile}`}</h3>
                <p className="carousel__text">{projects[currentProjectShown].description}</p>
                <ul>Written with:
                    {projects[currentProjectShown].languages.map(language => <li>{language}</li>)}
                </ul>
                <a href={projects[currentProjectShown].githubLink}><img className="carousel__icon" src={page} alt="github" /></a>
                <a href={projects[currentProjectShown].deployLink}><img className="carousel__icon"src={code} alt="github" /></a>

            </article>
        </section> 
     );
}
 
export default Carousel;