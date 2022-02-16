import "./CarouselItem.scss"
const CarouselItem = ({image, title, description, number}) => {
    return (
    <div className ="carousel-item">
        <div className="carousel-item__image-wrap">
            <img src={image} className={`carousel-item__image carousel-item__image--${number}`} alt={`image${title}`} />
        </div>
        <article className="carousel-item__copy">
            <h3 className="carouse-iteml__header">{title}</h3>
            <p className="carousel-tem__text">{description}</p>
        </article>
    </div>   
    );
}
 
export default CarouselItem;