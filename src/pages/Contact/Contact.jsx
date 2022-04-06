import contactimg from "../../assets/images/projects/contact-1-01.svg";
import github from "../../assets/images/skills/github.svg";
import linkedin from "../../assets/images/skills/linkedin.svg";
import email from "../../assets/images/skills/email.svg";
import "./Contact.scss"

const Contact = () => {
    return (
    <div id="contact"className="page">
        <h3 className=" page__heading">Contact</h3>
            <div className="about" >
                <div class="about__text">
                    <p className="about__copy">I was first introduced to coding when, working with a digital agency, I launched and latterly managed a website, as part of my day-to-day job in corporate communications. 
                    <br/>
                    <br/>
                    I had to use some basic HTML and CSS on my wordpress CMS, so to upskill I started a codeacademy course and haven't looked back since! 
                    In April 2021 I started a full-stack, self-paced course with _nology alongside my full-time job. 
                    Over the next 8 months, I started learning javascript and building my first basic web apps. 
                    <br/>
                    <br/>
                    In October 2021, the _nology team offered me a position as junior software coach, to help others learn to code too! 
                    <br/>
                    <br/>
                    After completing a 12-week bootcamp I started leading a 3-hour lesson each week, on everything from basic flexbox to React testing library!
                    The role presented a really unique opportunity for me to combine coding with what I loved most about comms, breaking-down complex technical topics into accessible, everyday English.
                    <br/>
                    </p>
                    <a href="#projects" className="button--primary about__button">Download my CV</a>
                </div>
             <img className="about__image hero__image" src={contactimg} alt="josie newman" />
            </div>
        <footer className="contact">
            <article className="contact__icons">
               <a target="blank" href = "https://github.com/JosieAilsa"><img src={github} alt="git hub link" /></a>
               <a href ="https://www.linkedin.com/in/josieanewman/" ><img src={linkedin} alt="linkedin link" /></a>
               <a href="mailto:josie.a.newman@gmail.com"><img alt="email link" src={email} /></a>
            </article>
            <article className="contact__text">
                <p>Josie Newman 2022 | All rights reserved</p>
            </article>
        </footer>
    </div>
    );
}
 
export default Contact;