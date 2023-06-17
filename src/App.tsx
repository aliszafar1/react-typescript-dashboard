import SideMenu from "./sidemenu";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import AppRoutes from "./routes";
function App() {
  const [theme, colorMode] = useMode();

  return (
    //@ts-ignore
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
