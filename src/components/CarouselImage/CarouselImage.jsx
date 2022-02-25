import "./CarouselImage.scss"

const CarouselImage = ({image, item, title}) => {
    return (
        <div className={`carousel-item__image-wrap carousel-item__image-wrap--${item}`}>
            <img src={image} className={`carousel-item__image carousel-item__image--${item}`} alt={`${title}`} />
        </div>
     );
}
 
export default CarouselImage;