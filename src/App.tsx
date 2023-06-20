import React from "react";
import { CssBaseline, ThemeProvider, Grid } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import AppRoutes from "./routes";
import SideMenu from "./sidemenu";
import "./styles.css";

function App() {
  const [theme, colorMode] = useMode();

  return (
    // eslint-disable-next-line
    //@ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      {/*  eslint-disable-next-line */}
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Grid className="app-container" spacing={2}>
              <Grid item xs={8}>
                <SideMenu />
              </Grid>
              <Grid item xs={2}>
                <AppRoutes />
              </Grid>
            </Grid>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
