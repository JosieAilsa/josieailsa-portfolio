import "./App.css";
import Landing from "./pages/Landing/Landing";
import { useState } from "react";
import Main from "./pages/Main/Main";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleLandingClick = () => {
    setShowLanding(false);
    setShowMain(true);
  };

  return (
    <body>
      {showLanding && <Landing handleLandingClick={handleLandingClick} />}
      {showMain && <Main />}
    </body>
  );
};

export default App;
