import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import "./styles.css";
import Home from "./home";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      {/* @ts-ignore */}
      <ColorModeContext.Provider value={colorMode}>
        {/* @ts-ignore */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
