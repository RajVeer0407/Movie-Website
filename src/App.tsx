import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

export default App;

import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AllRoutes />
    </>
  );
}
