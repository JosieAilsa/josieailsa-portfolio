import "./SkillsCard.scss";

const SkillsCard = ({title, content,icon}) => {
    return (
    <section className="card">
        <img className="card__icon" src={icon} alt={title + " icon"}/>
        <div className="card__copy">
            <h4 className="card__title">{title}</h4>
            <p className="card__">{content}</p>
        </div>
    </section>);
}
 
export default SkillsCard;