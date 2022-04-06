import "./CarouselCopy.scss";

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
      <a className="carousel__copy-button" href={codebase}>See my code</a>
      <a className="carousel__copy-button" href={liveSite}>See the live site</a>
      </div>
    </article>
  );
};

export default CarouselCopy;
