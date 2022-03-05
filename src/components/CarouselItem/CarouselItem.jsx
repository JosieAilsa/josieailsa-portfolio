import CarouselImage from "../CarouselImage/CarouselImage";
import "./CarouselItem.scss";

const CarouselItem = ({ image, title, description, item }) => {
  return (
    <div className={`carousel-item carousel-item--${item}`}>
      <CarouselImage image={image} item={item} title={title} />
      <article className="carousel-item__copy">
        <h3 className="carouse-item__header">{title}</h3>
        <p className="carousel-item__text">{description}</p>
      </article>
    </div>
  );
};

export default CarouselItem;
