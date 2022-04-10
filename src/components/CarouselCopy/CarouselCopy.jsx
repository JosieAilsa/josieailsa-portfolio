import "./CarouselCopy.scss";
import Button from "../Button/Button"
export const CarouselCopy = ({
  id,
  title,
  description,
  codebase,
  liveSite,
}) => {
  return (
    <article className="carousel__copy">
      <h4 className="carousel__header">{`${id}. ${title}`}</h4>
      <p className="carousel__text">{description}</p>
      <div className="carousel__code-container">
      <Button content={<a href={codebase}>See my code</a>} classNames="button--secondary"/>
      <Button content={<a href={liveSite}>See the site</a>} classNames="button--secondary"/>
      </div>
    </article>
  );
};

export default CarouselCopy;
