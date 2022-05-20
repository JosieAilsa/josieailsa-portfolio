import React from "react";
import contactimg from "../../assets/images/projects/contact-1-01.svg";
import Button from "../Button/Button";
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
          upskill I started a codeacademy course and haven't looked back since!
          In April 2021 I started a full-stack, self-paced course with _nology
          alongside my full-time job. Over the next 8 months, I started learning
          javascript and building my first basic web apps.
          <br />
          <br />
          In October 2021, the _nology team offered me a position as junior
          software coach, to help others learn to code too!
          <br />
          <br />
          After completing a 12-week bootcamp I started leading a 3-hour lesson
          each week, on everything from basic flexbox to React testing library!
          The role presented a really unique opportunity for me to combine
          coding with what I loved most about comms, breaking-down complex
          technical topics into accessible, everyday English.
          <br />
          <br />
          See my CV for more info on all my experience to-date.
        </p>
        <Button
          classNames="button--secondary"
          content={<a href="/Users/Josie/jan-portfolio/src/assets/Josie Newman CV - May 20 .pdf" download="Josie Newman CV"> Download my CV</a>}
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
