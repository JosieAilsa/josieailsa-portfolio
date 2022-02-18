import "./CarouselImage.scss"

const CarouselImage = ({image, number, title}) => {
    return (
        <div className={`carousel-item__image-wrap carousel-item__image-wrap--${number}`}>
            <img src={image} className={`carousel-item__image carousel-item__image--${number}`} alt={`image${title}`} />
        </div>
     );
}
 
export default CarouselImage;