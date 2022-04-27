import { CarouselCopy } from "../../components/CarouselCopy/CarouselCopy";
import Button from "../../components/Button/Button";
import arrowLeft from "../../assets/images/icons/arrow-left.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import "./Carousel.scss";
import { useState } from "react";
import CarouselImage from "../../components/CarouselImage/CarouselImage";
import pinkFlower from "../../assets/images/flowers/flowers-01.svg";
import orangePetals from "../../assets/images/flowers/flowers-07.svg";
import greenFlower from "../../assets/images/flowers/flowers-09.svg";

const Carousel = ({ carouselData }) => {
  //Set the carousel to start and re-render when items change
  const [currentProjectShown, setCurrentProjectShown] = useState(0);

  //Handle l and r carousel button click
  const onClick = (e) => {
    const leftButton = document.querySelector(".carousel__button-left");
    const rightButton = document.querySelector(".carousel__button-right");
    //If right button click
    if (e.target.dataset.id === "click-right") {
      //If first item remove the inactive class to left btn
      if (currentProjectShown === 0) {
        leftButton.classList.toggle("carousel__button--inactive");
      }
      //Get next item
      const nextProject = currentProjectShown + 1;
      //If this is last item add inactive class to right btn
      if (nextProject === carouselData.length - 1) {
        rightButton.classList.add("carousel__button--inactive");
      }
      //If it is the last project return, doing nothing
      if (currentProjectShown === carouselData.length - 1) {
        return;
      }
      //Else increment the carouselData
      setCurrentProjectShown(nextProject);
      return;
    }
    //If left click, get next project
    const nextProject = currentProjectShown - 1;
    //If current project shown is last, remove inactive of right btn
    if (currentProjectShown === carouselData.length - 1) {
      rightButton.classList.toggle("carousel__button--inactive");
    }
    //If at start on nxt project, add the inactive class
    if (nextProject === 0) {
      leftButton.classList.add("carousel__button--inactive");
    }
    //If at start, return and do nothing
    if (currentProjectShown === 0) {
      return;
    }
    //Else increment the carouselData
    setCurrentProjectShown(nextProject);
  };
  //Find index of items to be shown either of side item in focus
  const findNextCarouselNum = (currentID, arrayLength) => {
    //If at the last item, give the 1,2,3
    if (currentID === arrayLength - 1) {
      return [0, 1, 2];
    }
    //If at the second last item, give the last and the first.
    if (currentID + 1 === arrayLength - 1) {
      return [arrayLength - 1, 0, 1];
    }
    //If at the second last item, give the last and the first.
    if (currentID + 2 === arrayLength - 1) {
      return [arrayLength - 2, arrayLength - 1, 0];
    }
    //Else give next two
    return [currentID + 1, currentID + 2, currentID + 3];
  };
  //Destructure to get index of left and right images
  const [two, three, four] = findNextCarouselNum(
    currentProjectShown,
    carouselData.length
  );

  return (
    <section className="carousel">
      <div className="carousel__image-container">
        <img
          className="carousel__flower carousel__flower--petals"
          src={orangePetals}
          alt=""
        />
        <img
          className="carousel__flower carousel__flower--pink"
          src={pinkFlower}
          alt=""
        />
        <img
          className="carousel__flower carousel__flower--green"
          src={greenFlower}
          alt=""
        />
        <CarouselImage
          image={carouselData[currentProjectShown].image}
          item={"main"}
          title={carouselData[currentProjectShown].projectTitle}
        />
        <CarouselImage
          image={carouselData[two].image}
          item={"two"}
          title={carouselData[currentProjectShown].projectTitle}
        />
        <CarouselImage
          image={carouselData[three].image}
          item={"three"}
          title={carouselData[currentProjectShown].projectTitle}
        />
        <CarouselImage
          image={carouselData[four].image}
          item={"four"}
          title={carouselData[currentProjectShown].projectTitle}
        />
      </div>
      <div className="carousel__buttons">
        <Button
          classNames="carousel__button carousel__button-left carousel__button--inactive"
          onClick={onClick}
          content={
            <img
              data-id="click-left"
              className="carousel__button-image"
              src={arrowLeft}
              alt=""
            />
          }
        />
        <Button
          classNames="carousel__button carousel__button-right"
          onClick={onClick}
          content={
            <img
              data-id="click-right"
              className="carousel__button-image"
              src={arrowRight}
              alt=""
            />
          }
        />
      </div>
      <CarouselCopy
        id={carouselData[currentProjectShown].id}
        title={carouselData[currentProjectShown].projectTitle}
        description={carouselData[currentProjectShown].description}
        codebase={carouselData[currentProjectShown].codebase}
        liveSite={carouselData[currentProjectShown].liveSite}
      />
    </section>
  );
};

export default Carousel;
