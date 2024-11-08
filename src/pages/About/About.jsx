import React from "react";
import "./About.scss";
import surfingImg from "../../assets/images/surfing.png"
import fawnImg from "../../assets/images/fawn.png"

const About = () => {
  return (
    <div className="about">
        <section>
          <p className="about__copy">
            I was first introduced to coding in 2020 when I began managing a website as part of my day-to-day job in corporate communications. I was interested in how HTML and CSS worked in the CMS, so I started a Codecademy course to learn more. Once I started writing JavaScript, I was hooked!
            <br />
            <br />
            Since then, I've learned as much as I can, tried my hand a bit of design (as this portfolio shows) and picked up several more languages along the way (Java, Python).
            <br />
            <br />
            Now, as a developer with a few years of experience under my belt, I have a good understanding of how to write clean, elegant code.
            <br/>
            <br/>
            I'm passionate about writing maintainable logic that is easy to read and understand from the get-go.
            <br/>
            <br/>
            I think one of the benefits of not coming from a non-traditional tech background, is that my career in communications helped me learn how to communicate complex concepts 
            in a way that is accessible for everyone - particularly for non-technical folks!
            <br />
            </p>
        </section>
          <section>
            <p>
              Outside of work, I'm happiest when either outside exploring or sat on the sofa cuddling my dog, Beetle. I took up surfing a few years ago and have well and truly caught the bug!
              <br/>
              <br/>
              My ideal weekend would be one spent camping with all my friends - somewhere in the South West.
            </p>
          </section>
          <div class="about__images">
            <img class="about__image" alt="me surfing!" src={surfingImg} />
            <img class="about__image" alt="me with my lovely parent's rescue spaniel - Fawn" src={fawnImg}/>
          </div>
    </div>
  );
};
export default About;
