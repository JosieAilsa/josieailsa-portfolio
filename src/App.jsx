import "./App.css";
import Routing from "./pages/Routing/Routing";
import Landing from "./pages/Landing/Landing";
import { useState } from "react";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleLandingHover = () => {
    setShowLanding(false);
    setShowMain(true);
  };

  return (
    <body>
      {showLanding && <Landing handleLandingHover={handleLandingHover} />}
      {showMain && 
        <Routing/>
      }
    </body>
  );
};

export default App;
