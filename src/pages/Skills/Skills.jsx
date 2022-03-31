import SkillsCard from "../../components/SkillsCard/SkillsCard";
import {skillsArr} from "../../assets/data/skills" 
import "./Skills.scss"
import backgroundflower from "../../assets/images/flowers/backgroundflower.svg"


const Skills = () => {
    const skillsCardsArrJSX1 = skillsArr.map(({title,content, icon},i) => {
        if (i > 3) return;
        return <SkillsCard  key={title} title={title} content={content} icon={icon}/>
    })
    const skillsCardsArrJSX2 = skillsArr.map(({title,content, icon},i) => {
        if (i < 4) return;
        return <SkillsCard  key={title} title={title} content={content} icon={icon}/>
    })
    
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