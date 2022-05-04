import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography
        variant="h5"
        style={{ margin: 10, fontWeight: "bold", fontFamily: "sans-serif" }}
      >
        Welcome to compiler lab simulator.
      </Typography>
      <Typography paragraph>
        Various tasks are implemented for C language with simulation as listed
        below.
      </Typography>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Typography
          variant="h6"
          style={{
            margin: 10,
            fontFamily: "monospace",
            fontWeight: "bold",
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 10,
          }}
        >
          1. To design an online simulator that checks whether a user input
          string is a comment or not.
        </Typography>
        <Typography
          variant="h6"
          style={{
            margin: 10,
            fontFamily: "monospace",
            fontWeight: "bold",
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 10,
          }}
        >
          2. To design an online simulator that checks whether a user input
          string is a valid identifier or not.
        </Typography>
        <Typography
          variant="h6"
          style={{
            margin: 10,
            fontFamily: "monospace",
            fontWeight: "bold",
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 10,
          }}
        >
          3. To design a Lexical analyzer for C language.
        </Typography>
        <Typography
          variant="h6"
          style={{
            margin: 10,
            fontFamily: "monospace",
            fontWeight: "bold",
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 10,
          }}
        >
          4. Left Most Derivation and Right Most Derivation
        </Typography>
        <Typography
          variant="h6"
          style={{
            margin: 10,
            fontFamily: "monospace",
            fontWeight: "bold",
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 10,
          }}
        >
          5. Parse Tree Generation
        </Typography>
      </Box>
      <Button
        variant="contained"
        style={{ margin: 12, alignSelf: "center" }}
        href="https://compiler-lab.web.app/docs"
      >
        Read Documentation
      </Button>
    </Box>
  );
}

export default Home;
