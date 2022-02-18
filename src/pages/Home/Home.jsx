
import heroImg from "../../assets/images/landing-img.svg"
import "./Home.scss"
import Button from "../../components/Button/Button"

const Home = () => {
    return (
           <div className="home page">
               <section className="hero">
                    <section className="hero__text">
                        <h1 className="hero__header">Hi, I'm Josie.
                        </h1>
                        <h3 className="hero__intro">I'm Bristol-based UI developer and software coach.</h3>
                       <Button content = "See my projects" value={"see-projects"}classNames="hero__button hero__button--active"/>
                    </section>
                    <img className="hero__image"src={heroImg} alt="hero image"/>
               </section>
           </div>
     );
}
 
export default Home;