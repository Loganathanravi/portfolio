import {
  AppBar,
  Avatar,
  styled,
  Badge,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import  "./Navbar.css"
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavBar = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:loganathanr7010@gmail.com";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Loganathanravi", "_blank");
  };

  return (
     <div>

    
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5">Portfolio</Typography>
        <Box sx={{display: "flex", alignItems: "center", gap: "20px"}}>
          <Badge color="secondary" badgeContent={0}>
            <a href="https://github.com/Loganathanravi" target="_blank" rel="noopener noreferrer">
              <FaGithub sx={{marginRight: "1rem"}} fontSize="30px" color="black" onClick={handleGithubClick} />
            </a>
          </Badge>
          <Badge color="secondary" badgeContent={0}>
            <a href="mailto:loganathanr7010@gmail.com">
              <BiLogoGmail sx={{marginRight: "1rem"}} fontSize="30px" color="red" onClick={handleEmailClick} />
            </a>
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        </Box>
      </StyledToolbar>
    </AppBar>
   
    </div>
  );
};

export default NavBar;



