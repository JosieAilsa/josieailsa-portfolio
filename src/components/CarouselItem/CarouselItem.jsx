import CarouselImage from "../CarouselImage/CarouselImage";
import "./CarouselItem.scss"

const CarouselItem = ({image, title, description, number}) => {
    return (
    <div className ={`carousel-item carousel-item--${number}`}>
        <CarouselImage image={image} number ={number} title={title}/>
        <article className="carousel-item__copy">
            <h3 className="carouse-iteml__header">{title}</h3>
            <p className="carousel-tem__text">{description}</p>
        </article>
    </div>   
    );
}
 
export default CarouselItem;