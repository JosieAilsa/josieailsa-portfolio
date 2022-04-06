import SkillsCard from "../../components/SkillsCard/SkillsCard";
import {skillsArr} from "../../assets/data/skills" 
import "./Skills.scss"

const Skills = () => {
    const skillsCardsArrJSX1 =[]
    const skillsCardsArrJSX2 = []
    for(let i = 0; i < skillsArr.length; i++){
        let currentSkill = skillsArr[i];
        i > 3 ?
        skillsCardsArrJSX1.push(<SkillsCard  key={currentSkill.title} title={currentSkill.title} content={currentSkill.content} icon={currentSkill.icon}/>)
        :skillsCardsArrJSX2.push(<SkillsCard  key={currentSkill.title} title={currentSkill.title} content={currentSkill.content} icon={currentSkill.icon}/>)
    }
    
        return (
                <div id="skills"className="skills page" >
                    <h3 className="page__heading">Skills</h3>
                    <div className="skills-container">
                    <div  className="skills__col-1">
                        {skillsCardsArrJSX1}
                    </div>
                    <div className="skills__col-2">
                        {skillsCardsArrJSX2}
                    </div>
                    </div>
                </div>
        );
    }
    
 
export default Skills;