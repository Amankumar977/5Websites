import React, { useContext } from "react";
let ThemeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}
