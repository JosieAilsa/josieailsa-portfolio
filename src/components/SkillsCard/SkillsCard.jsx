import { useState, useRef  } from "react";
import "./SkillsCard.scss";
import arrowright from "../../assets/images/icons/arrow-right2.svg";

const SkillsCard = ({title, content,icon}) => {
    const [toggle, setToggle] = useState(false);
    const currentRef = useRef()
    const handleHover = () => {
        console.log(currentRef)
        if(!toggle){
            currentRef.current.classList.add("card__drop-down--active");
            setToggle(true)
            return;
        }
            currentRef.current.classList.remove("card__drop-down--active");
        setToggle(false)
        return;
    }

    return (
    <section className="card">
        <img className="card__icon" src={icon} alt={title + " icon"}/>
        <h4 className="card__title">{title}</h4>
        <button id ="expand" onMouseDown={handleHover} className="card__button"> 
            <img ref={currentRef} className="card__drop-down" src={arrowright} alt="" />
        </button>
        {toggle && <p className="card__content">{content}</p>}
    </section>);
}
 
export default SkillsCard;