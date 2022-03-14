import "./Landing.scss";
import logo from "../../assets/images/icons/jnlogo-landing2-01.svg";
import pinkFlower from "../../assets/images/flowers/flowers-01.svg";
import orangeFlower from "../../assets/images/flowers/flowers-02.svg";
import whiteFlower from "../../assets/images/flowers/flowers-03.svg";
import greenLeaf from "../../assets/images/flowers/flowers-05.svg";
import whitePetals from "../../assets/images/flowers/flowers-06.svg";
import orangePetals from "../../assets/images/flowers/flowers-07.svg";

const Landing = ({ handleLandingHover }) => {
  return (
    <main class="landing" id="landing">
      <div className="landing__artwork">
        <img
          className="landing__art "
          src={greenLeaf}
          alt=""
        />
        <img
          className="landing__art "
          src={whitePetals}
          alt=""
        />
        <img
          className="landing__art "
          src={pinkFlower}
          alt=""
        />
        <img
          className="landing__art "
          src={orangeFlower}
          alt=""
        />
        <img
          className="landing__art "
          src={greenLeaf}
          alt=""
        />
        <img
          className="landing__art "
          src={pinkFlower}
          alt=""
        />
        <img
          className="landing__art "
          src={whiteFlower}
          alt=""
        />
        <img
          className="landing__art "
          src={orangePetals}
          alt=""
        />
         <img
          className="landing__art "
          src={greenLeaf}
          alt=""
        />
         <img
          className="landing__art "
          src={whiteFlower}
          alt=""
        />
          <img
          className="landing__art "
          src={orangePetals}
          alt=""
        />
         <img
          className="landing__art "
          src={pinkFlower}
          alt=""
        />
      </div>
      <section className="landing-hero">
        <img src={logo} alt="jnlogo" srcset="" className="landing-hero__logo" />
        <p onMouseOver={handleLandingHover} className="landing__cta">
          See portfolio
        </p>
      </section>
    </main>
  );
};

export default Landing;
