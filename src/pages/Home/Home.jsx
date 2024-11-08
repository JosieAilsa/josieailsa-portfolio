import heroImg from "../../assets/images/landing-img.svg";
import "./Home.scss";
import scroll from "../../assets/images/icons/carousel-arrow2.svg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div id="home" className="home page">
      <section className="hero">
        <section className="hero__text">
          <h1 className="hero__header">Hi, I'm Josie.</h1>
          <h2 className="hero__intro">
            I'm a Bristol-based developer.
          </h2>
          <Button
            classNames={"hero__button button--primary button"}
            content={<a href="#projects">See my projects</a>}
          />
        </section>
        <img className="hero__image" src={heroImg} alt="hero" />
      </section>
      <article className="scroll">
        <img className="scroll__image" src={scroll} alt="" />
        <p className="scroll__text">scroll</p>
      </article>
    </div>
  );
};

export default Home;
