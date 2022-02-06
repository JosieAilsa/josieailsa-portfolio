import Layout from "../../components/Layout/Layout";
import heroImg from "../../assets/images/landing-img.svg"

const Home = () => {
    return (
       <Layout>
           <main className="main">
               <section className="main__hero">
                   <h1>Hi, I'm Josie.</h1>
                   <h3>I'm a junior developer and software coach, based in Bristol.</h3>
                   <img src={heroImg} alt="hero image"/>
               </section>
           </main>
       </Layout>
     );
}
 
export default Home;