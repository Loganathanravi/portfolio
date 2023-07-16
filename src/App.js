import Stack from "@mui/system/Stack";
import React from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import { Box, Container } from "@mui/material";


function App() {
  return (
    <Box >
      <NavBar />
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Menu />
          <Content />
        </Stack>
      </Container>
    </Box>
  );
}
export default App;




