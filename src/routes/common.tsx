import React from "react";

import { Link } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { PATH } from ".";

export const FallBack = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={PATH.HOME}>Go to the home page</Link>
      </p>
    </div>
  );
};
