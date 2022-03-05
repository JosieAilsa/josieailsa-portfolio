import powerlift5x5 from "../images/projects/powerlift5x5.png";
import morsecode from "../images/projects/morsecodetranslator.png";
import calculator from "../images/projects/calculator.png";

export const projects = [
  {
    id: 1,
    projectTitile: "Calculator",
    languages: ["HTML", "CSS", "Typescript"],
    description:
      "My first project using TypeScript. End to end tested with cypress",
    image: calculator,
    codebase: "https://github.com/JosieAilsa/js-calculator-challenge",
    liveSite: "https://josieailsa.github.io/js-calculator-challenge/",
  },
  {
    id: 2,
    projectTitile: "Morsecode Translator",
    languages: ["HTML", "CSS", "Vanilla JavaScript"],
    description:
      "Morse code translator built with JS, using an OOP approach. Unit tested with Jest",
    image: morsecode,
    codebase: "",
    liveSite: "",
  },
  {
    id: 3,
    projectTitile: "OAE Event Programme",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    images: morsecode,
    description:
      "Together with my _nology cohort, we developed a full-stack client project for the Orchestera of the Age of Englightenment. Working as part of a 12-man team, I worked on thefront end, creating a digital event programme webb app for attendees to access during the orchestra's events. The front-end was developed with ",
    image: morsecode,
    codebase: "https://github.com/nology-tech/oae-event-programme",
    liveSite: "https://nology-tech.github.io/oae-event-programme/6",
  },
  {
    id: 4,
    projectTitile: "5x5 Powerlift",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    image: powerlift5x5,
    description:
      "The front-end of my first full-stuck application. Built using React, this weightlifting tracker uses a form for users to record the type of lift, the weight and the difficulty each day. All the lifts logged to date can then be viewed and filtered in the all lifts section.",
    codebase: "https://github.com/JosieAilsa/react-powerlifting-tracker",
    liveSite: "https://josieailsa.github.io/lift/create",
  },
  {
    id: 5,
    projectTitile: "5x5 Powerlift API",
    languages: ["Java", "Spring Boot", "GCP", "SQL"],
    image: morsecode,
    description:
      "My first API written in Java using SpringBoot and deployed using GCP",
    codebase: "https://github.com/JosieAilsa/react-powerlifting-tracker",
  },
  {
    id: 6,
    projectTitile: "Piglatin translator",
    languages: ["JavaScript"],
    image: morsecode,
    description:
      "A pig latin translator written, written and unit tested with jest - written in TDD approach",
    codebase: "https://github.com/JosieAilsa/react-powerlifting-tracker",
  },
  {
    id: 7,
    projectTitile: "Java Snap",
    languages: ["Java"],
    image: morsecode,
    description:
      "My first independent Java projecr. This simple two player console snap game, helped me get to grips with the basics of inheritence and enscapsulation, key OOP concepts. ",
    codebase: "https://github.com/JosieAilsa/java-game-challenge",
    liveSite: "",
  },
];
