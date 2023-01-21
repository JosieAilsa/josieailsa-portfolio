import React from "react";
import contactimg from "../../assets/images/projects/contact-1-01.svg";
import Button from "../../components/Button/Button";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div class="about__text">
        <p className="about__copy">
          I was first introduced to coding when, working with a digital agency,
          I launched and latterly managed a website, as part of my day-to-day
          job in corporate communications at a large international FTSE 30 FMCG
          company.
          <br />
          <br />
          I had to use some basic HTML and CSS on my wordpress CMS, so to
          upskill I started a Codeacademy course and haven't looked back since!
          In April 2021 I started a full-stack, self-paced course with _nology
          alongside my full-time job. Over the next 8 months, I started learning
          javascript and building my first basic web apps.
          <br />
          <br />
          In October 2021, the _nology team offered me a position as junior
          software coach, to help others learn to code too!
          <br />
          <br />
          After a year of coaching and helping others learn the fundamentals
          front-end development. I took the plunge into fully-fledged
          development myself. I'm now a full stack developer at Demand Logic, a
          green property tech company helping. I work software which models the
          heating, air ventilation and cooling of large corporate office and
          buildings, and assesses their efficiency.
          <br />
          <br />
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
      <img
        className="about__image hero__image"
        src={contactimg}
        alt="josie newman"
      />
    </div>
  );
};
export default About;
