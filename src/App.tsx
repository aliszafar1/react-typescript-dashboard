import React from "react";
import { CssBaseline, ThemeProvider, Grid } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import AppRoutes from "./routes";
import SideMenu from "./sidemenu";
import "./styles.css";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <SideMenu />
            <AppRoutes />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
