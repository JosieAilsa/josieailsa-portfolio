import About from "../About/About";
import Footer from "./../../components/Footer/Footer";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="page">
      <h3 className="contact__heading page__heading">Contact</h3>
      <About />
      <Footer />
    </div>
  );
};
export default Contact;
