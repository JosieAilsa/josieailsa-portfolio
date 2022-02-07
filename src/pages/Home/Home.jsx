import Layout from "../../components/Layout/Layout";
import heroImg from "../../assets/images/landing-img.svg"
import "./Home.scss"
const Home = () => {
    return (
       <Layout>
           <div className="main page">
               <section className="hero">
                    <section className="hero__text">
                        <h1 className="hero__header">Hi, I'm 
                            <strong className="hero__name"> Josie</strong>.
                        </h1>
                        <h3 className="hero__intro">I'm Bristol-based UI developer and software coach.</h3>
                    </section>
                    <img className="hero__image"src={heroImg} alt="hero image"/>
               </section>
           </div>
       </Layout>
     );
}
 
export default Home;