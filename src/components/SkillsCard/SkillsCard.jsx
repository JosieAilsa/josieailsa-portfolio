import { useState, useRef } from "react";
import "./SkillsCard.scss";
import arrowright from "../../assets/images/icons/arrow-right2.svg";

const SkillsCard = ({ title, content, icon }) => {
  const [toggle, setToggle] = useState(false);
  const iconRef = useRef();
  const handleClick = () => {
    setToggle(!toggle);
  };

  const chevronClass = `card__drop-down ${
    toggle ? "card__drop-down--active" : ""
  }`;

  return (
    <section className="card">
      <div className="card__wrapper">
        <img className="card__icon" src={icon} alt={title + " icon"} />
        <h4 className="card__title">{title}</h4>
        <button id="expand" onClick={handleClick} className="card__button">
          <img ref={iconRef} className={chevronClass} src={arrowright}  alt={title} />
        </button>
      </div>
      {toggle && <p className="card__content">{content}</p>}
    </section>
  );
};

export default SkillsCard;
