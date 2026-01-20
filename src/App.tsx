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
      <button onClick={toggleTheme} style={{ padding: "8px", margin: "10px" }}>
        {theme === "light" ? "🌙 Dark" : "☀ Light"}
      </button>

      <Navbar />
      <AllRoutes />
    </>
  );
}
