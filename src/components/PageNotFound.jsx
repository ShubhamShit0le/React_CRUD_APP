import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const PageNotFound = (props) => {
  return (
    <Typography variant=" h2">
      
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <Typography variant="h4">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </Typography>
         
          <NavLink to="/">
            <Button variant="contained" color="error" style={{marginTop:"30px"}}> Go Back To Home </Button>
          </NavLink>
    </Typography>
  );
};

export default PageNotFound;
