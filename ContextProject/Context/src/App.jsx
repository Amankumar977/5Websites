import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeBtn from "./Components/ThemeBtn/ThemeBtn";
import Card from "./Components/Card/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  let darkTheme = () => {
    setThemeMode("dark");
  };
  let lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
