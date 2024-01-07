import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobbg.jpg";
import SearchInputEl from "./SearchInputEl";

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    height: "100%",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StyleHeader>
        <SearchInputEl />
      </StyleHeader>
    </>
  );
};

export default Header;
