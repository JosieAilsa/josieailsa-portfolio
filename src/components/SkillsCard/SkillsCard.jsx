const SkillsCard = ({title, content,icon}) => {
    return (
    <section className="card">
        <img className="card__icon" src={icon} alt="" />
        <div className="card__copy">
            <h4 className="card__title">{title}</h4>
            <p className="card__copy">{content}</p>
        </div>
    </section>);
}
 
export default SkillsCard;