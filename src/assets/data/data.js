import powerlift5x5 from "../images/projects/powerlift5x5.png";
import morsecode from "../images/projects/morsecodetranslator.png"

export const projects = 
[
    {
        id: 1,
        projectTitile: "Calculator",
        languages: ["HTML", "CSS", "Typescript"],
        description: "My first project using typescript. End to end tested with cypress",
        image: powerlift5x5,
        githubLink:"",
        deployLink:""
    },
    {
        id: 2,
        projectTitile: "Morsecode Translator",
        languages: ["HTML", "CSS", "Vanilla JavaScript"],
        description: "Morse code translator, built with JS using and OOP approach.",
        githublink:"",
        deployLink:"" 

    },
    {
        id: 3,
        projectTitile: "OAE Event Programme",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        images: morsecode,
        description: "Together with my _nology cohort, we developed a full stack event project for the Orchester of the Age of Englightenment",
        githublink:"",
        deployLink:"" 
    },
    {
        id: 4,
        projectTitile: "5x5 Powerlift",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        image: powerlift5x5,
        description: "Together with my _nology cohort, we developed a full stack event project for the Orchester of the Age of Englightenment",
        githublink:"https://github.com/JosieAilsa/react-powerlifting-tracker",
        deployLink:"https://josieailsa.github.io/lift/create" 
    },
    {
        id: 5,
        projectTitile: "5x5 Powerlift API",
        languages: ["Java", "Spring Boot", "GCP", "SQL"],
        images:powerlift5x5,
        description: "My first API written in Java using SpringBoot and deployed using GCP",
        githublink:"https://github.com/JosieAilsa/react-powerlifting-tracker",
    }

]