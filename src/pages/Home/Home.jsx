import heroImg from "../../assets/images/landing-img.svg";
import "./Home.scss";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <div id="home" className="home page">
      <Layout>
      <section className="hero">
        <section className="hero__text">
          <h1 className="hero__header">Hi, I'm Josie.</h1>
          <h3 className="hero__intro">
            I'm a Bristol-based UI developer and software coach.
          </h3>
          <a href="#projects" className="hero__button button--hero button">See my projects</a>
        </section>
        <img className="hero__image" src={heroImg} alt="hero" />
      </section>
    </Layout>
    </div>
  );
};

export default Home;
