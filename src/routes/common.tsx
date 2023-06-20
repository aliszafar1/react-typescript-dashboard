import React from "react";

import { Link } from "react-router-dom";
import { PATH } from ".";

export const FallBack = () => {
  return <>...</>;
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
