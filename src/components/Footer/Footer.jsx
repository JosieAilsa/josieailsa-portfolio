import React from "react";
import github from "../../assets/images/skills/github.svg";
import linkedin from "../../assets/images/skills/linkedin.svg";
import email from "../../assets/images/skills/email.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer__icons">
        <a target="blank" href="https://github.com/JosieAilsa">
          <img src={github} alt="git hub link" />
        </a>
        <a href="https://www.linkedin.com/in/josieanewman/">
          <img src={linkedin} alt="linkedin link" />
        </a>
        <a href="mailto:josie.a.newman@gmail.com">
          <img alt="email link" src={email} />
        </a>
      </article>
      <article className="footer__text">
        <p>Josie Newman 2023 | All rights reserved</p>
      </article>
    </footer>
  );
};
export default Footer;
