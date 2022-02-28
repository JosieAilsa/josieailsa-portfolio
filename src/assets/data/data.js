import powerlift5x5 from "../images/projects/powerlift5x5.png";
import morsecode from "../images/projects/morsecodetranslator.png"

export const projects = 
[
    {
        id: 1,
        projectTitile: "Calculator",
        languages: ["HTML", "CSS", "Typescript"],
        description: "My first project using TypeScript. End to end tested with cypress",
        image: powerlift5x5,
        githubLink:"https://github.com/JosieAilsa/js-calculator-challenge",
        deployLink:"https://josieailsa.github.io/js-calculator-challenge/"
    },
    {
        id: 2,
        projectTitile: "Morsecode Translator",
        languages: ["HTML", "CSS", "Vanilla JavaScript"],
        description: "Morse code translator built with JS, using an OOP approach. Unit tested with Jest",
        image: morsecode,
        githubLink:"",
        deployLink:"" 

    },
    {
        id: 3,
        projectTitile: "OAE Event Programme",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        images: morsecode,
        description: "Together with my _nology cohort, we developed a full stack event project for the Orchester of the Age of Englightenment",
        image: morsecode,
        githubLink:"https://github.com/JosieAilsa/morse-code-translator",
        deployLink:"https://josieailsa.github.io/morse-code-translator/" 
    },
    {
        id: 4,
        projectTitile: "5x5 Powerlift",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        image: powerlift5x5,
        description: "Together with my _nology cohort, we developed a full stack event project for the Orchester of the Age of Englightenment. The product comprised of a digital programme for live orchestra events,",
       githubLink:"https://github.com/JosieAilsa/react-powerlifting-tracker",
        deployLink:"https://josieailsa.github.io/lift/create" 
    },
    {
        id: 5,
        projectTitile: "5x5 Powerlift API",
        languages: ["Java", "Spring Boot", "GCP", "SQL"],
        image: morsecode,
        description: "My first API written in Java using SpringBoot and deployed using GCP",
        githubLink:"https://github.com/JosieAilsa/react-powerlifting-tracker",
    },
    {
        id: 6,
        projectTitile: "Piglatin translator",
        languages: ["JavaScript"],
        image: morsecode,
        description: "A pig latin translator written, written and unit tested with jest - written in TDD approach",
        githubLink:"https://github.com/JosieAilsa/react-powerlifting-tracker",
    },
    {
        id: 7,
        projectTitile: "Java Snap",
        languages: ["Java"],
        image: morsecode,
        description: "My first Java project",
        githubLink:"https://github.com/JosieAilsa/java-game-challenge",
        deployLink:""
    }

]