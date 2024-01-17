import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      {" "}
      <div>Error</div>
      <h3>{error.status}</h3>
      <h4>{error.statusText}</h4>
    </div>
  );
};

export default Error;
