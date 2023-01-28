import React from "react";
import Button from "../../components/Button/Button";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
        <p className="about__copy">
          I was first introduced to coding when, in 2020 I began managing a website, as part of my day-to-day
          as part of my job in corporate communications.
          <br />
          <br />
          I was interested in how HTML and CSS worked in the CMS, so started a codeacademy course to learn more. 
          <br />
          <br />
          Fast forward almost three years (and a lot of late nights!) later, I'm now a fully-fledged full-stack developer 
          working at a clean tech start up. 
          <br/>
          <br/>
          See my CV for more info on all my experience to-date.
        </p>
        <Button
          classNames="button--secondary"
          content={
            <a
              href="https://github.com/JosieAilsa/josieailsa-portfolio/blob/main/src/assets/JN%20CV%202023.pdf"
              download="Josie Newman CV"
            >
              {" "}
              Download my CV
            </a>
          }
        />
    </div>
  );
};
export default About;
