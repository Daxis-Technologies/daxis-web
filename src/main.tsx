import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { useThemeController } from "./hooks/useThemeController";
import { GlobalStyle } from "./styles/global";

const Root: React.FC = () => {
  const {
    theme,
    themeObject,
    toggleTheme,
    fontScale,
    increaseFont,
    decreaseFont,
  } = useThemeController();

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle fontScale={fontScale} />
      <App
        theme={theme}
        onToggleTheme={toggleTheme}
        onIncreaseFont={increaseFont}
        onDecreaseFont={decreaseFont}
      />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
