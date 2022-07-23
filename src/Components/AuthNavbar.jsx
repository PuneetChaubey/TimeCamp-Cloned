import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const AuthNavbar = ({ authLink, authName }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 4px 4px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"
      mb="10px"
      padding="1.4rem 13rem"
    >
      <Link to="/">
        <img
          src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
          alt=""
        />
      </Link>

      <Link to={`${authLink}`}>
        <strong>{authName}</strong>
      </Link>
    </Box>
  );
};
