import HomePage from "./components/Pages/Home";
import Messages from "./components/Pages/Messages";

import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import Privacy from "./components/Pages/Privacy Policy";
import Galery from "./components/Pages/Galery";
import Turismo from "./components/Pages/Turismo";

const App = () => {
  const { webContent } = useContext(AppContext);
  const { MESSAGES } = webContent;

  return (
    <div className="App">
      <Privacy />
      <HomePage />
      <Messages message={MESSAGES} divisor="." />
      <Galery />
      <Turismo />
    </div>
  );
};

export default App;
