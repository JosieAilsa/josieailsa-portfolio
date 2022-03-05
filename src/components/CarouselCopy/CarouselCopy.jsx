import "./CarouselCopy.scss";
import Button from "../Button/Button";

export const CarouselCopy = ({
  id,
  title,
  description,
  codebase,
  liveSite,
}) => {
  return (
    <article className="carousel__copy">
      <h3 className="carousel__header">{`${id}. ${title}`}</h3>
      <p className="carousel__text">{description}</p>
      <div className="carousel__code-container">
        <Button
          content={<a href={codebase}>See my code</a>}
          classNames="carousel__copy-button"
        />
        <Button
          content={<a href={liveSite}>See the live site</a>}
          classNames="carousel__copy-button"
        />
      </div>
    </article>
  );
};

export default CarouselCopy;
