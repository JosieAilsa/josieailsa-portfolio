import SkillsCard from "../../components/SkillsCard/SkillsCard";
import {skillsArr} from "../../assets/data/skills" 
import "./Skills.scss"
import backgroundflower from "../../assets/images/flowers/backgroundflower.svg"

const Skills = () => {
const skillsCardsArrJSX1 = skillsArr.map(({title,content, icon},i) => {
    return <SkillsCard  key={title} title={title} content={content} icon={icon}/>
})

    return (
            <div id="skills"className="skills page" >
                <h3 className="page__heading">Skills</h3>
                <div className="skills-container">
                    {skillsCardsArrJSX1}
                </div>
            </div>
    );
}
 
export default Skills;