
import api from "../../assets/images/projects/api.jpeg";
import saveoom from "../images/projects/save-oom.png";
import java from "../../assets/images/projects/java.png";
import portfolio from "../../assets/images/projects/portfolio.png";

export const carouselData = [
  {
    id: 1,
    projectTitle: "Save Oom",
    languages: ["JavaScript", "Firebase", "FireStore"],
    image: saveoom,
    description:
      "The first client project I lead with a cohort of students. I guided the Product Owner through reviewing PRs, requesting changes and merge conflicts. I also added the more complex sections of the project - including adding the user context, more complex RTL tests and Firebase integrations.",
    codebase: null,
    liveSite: "https://save-oom.web.app/",
  },
  {
    id: 2,
    projectTitle: "Nology Java Library",
    languages: ["Java"],
    image: java,
    description:
      "My most recent Java project, this demonstrates more advanced OOP design, demonstrating the 4 pillars throughout. This project has persistance, reading from a CSV file on load then subsequently reading and writing to JSON. I've been working on the project alongside coaching full time!",
    codebase: "https://github.com/JosieAilsa/java-tech-tests",
    liveSite: null,
  },
  {
    id: 3,
    projectTitle: "My portfolio",
    languages: ["Javascript, HTML, CSS, React"],
    image: portfolio,
    description:
      "This portfolio, built with React and tested with RTL",
    codebase: "https://github.com/JosieAilsa/josieailsa-portfolio",
    liveSite: "https://josienewman.dev/",
  },
];
