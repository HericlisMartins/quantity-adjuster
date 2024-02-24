import React from "react";

import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import ProductCard from "./components/ProductCard";
import Logo from "./Logo";
import productmock from "./productmock.json"; // Make sure to adjust the path based on your project structure

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Hericlis.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const App: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Box p={2} textAlign={"center"}>
              <Logo />
            </Box>
          </Toolbar>
        </AppBar>
        <ProductCard product={productmock} />
      </Container>
      <Box
        component="footer"
        sx={{ bgcolor: "#000", py: 6, color: "white" }}
        mt={10}
      >
        <Typography variant="h6" align="center" gutterBottom>
          <Logo />
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Quantity Adjuster
        </Typography>
        <Copyright />
      </Box>
    </Box>
  );
};

export default App;
