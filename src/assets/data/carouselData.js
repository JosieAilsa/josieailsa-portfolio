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
    liveSite: "https://save-oom-oxna.web.app",
  },
  {
    id: 3,
    projectTitle: "My portfolio",
    languages: ["Javascript, HTML, CSS, React"],
    image: portfolio,
    description: "This portfolio, built with React and tested with RTL",
    codebase: "https://github.com/JosieAilsa/josieailsa-portfolio",
    liveSite: "https://josienewman.dev/",
  },
];
