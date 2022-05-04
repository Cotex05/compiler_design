import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Alert,
  TextareaAutosize,
  Grid,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

function Task5() {
  const [generated, setGenerated] = useState(false);

  const [step, setStep] = useState(0);

  const grammar = "T = T + T | T * T\nT = a | b | c";

  const images = [
    {
      uri: require("../assets/parse-tree1.png"),
    },
    {
      uri: require("../assets/parse-tree2.png"),
    },
    {
      uri: require("../assets/parse-tree3.png"),
    },
    {
      uri: require("../assets/parse-tree4.png"),
    },
    {
      uri: require("../assets/parse-tree5.png"),
    },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert("Parsing Completed!");
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      alert("This is the very first step of parse tree generation.");
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div style={{ margin: 20 }}>
        <Typography variant="h5" style={{ margin: 10, fontWeight: "bold" }}>
          Parse Tree Generation
        </Typography>
        <Typography paragraph style={{ margin: 10 }}>
          A syntax analyzer or parser takes the input from a lexical analyzer in
          the form of token streams. The parser analyzes the source code (token
          stream) against the production rules to detect any errors in the code.
          The output of this phase is a parse tree. A parse tree is a graphical
          depiction of a derivation. It is convenient to see how strings are
          derived from the start symbol. The start symbol of the derivation
          becomes the root of the parse tree. Let us see this by an example from
          the last topic. We take the left-most derivation of
          <strong> a * b + c </strong>
        </Typography>
        <Typography paragraph style={{ margin: 10, fontFamily: "monospace" }}>
          <a href="https://compiler-lab.web.app/docs">Read More...</a>
        </Typography>
      </div>
      <div
        style={{
          marginTop: 70,
          marginLeft: 20,
          padding: 10,
        }}
      >
        <Grid
          container
          spacing={10}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={5}>
            <h4>Production Rule</h4>
            <TextareaAutosize
              label="Grammar"
              defaultValue={grammar}
              variant="standard"
              minRows={3}
              multiline
              disabled
              style={{
                width: "25vw",
                backgroundColor: "#eee",
                borderRadius: 10,
                padding: 10,
                fontFamily: "monospace",
                fontSize: 18,
              }}
            />
            <h4>Input String</h4>
            <TextareaAutosize
              defaultValue={"a*b+c"}
              variant="standard"
              minRows={2}
              multiline
              disabled
              style={{
                width: "25vw",
                backgroundColor: "#eee",
                borderRadius: 10,
                padding: 10,
                fontFamily: "monospace",
                fontSize: 18,
              }}
            />
            <Button
              variant="contained"
              style={{ margin: 12, alignSelf: "center" }}
              onClick={() => setGenerated(true)}
            >
              Generate
            </Button>
            {generated ? (
              <Button
                variant="contained"
                style={{ margin: 12, alignSelf: "center" }}
                onClick={() => {
                  setGenerated(false);
                  setStep(0);
                }}
              >
                Reset
              </Button>
            ) : null}
          </Grid>
          {generated ? (
            <Grid item lg={5}>
              <div style={{ margin: "auto", width: 300 }}>
                <img
                  src={images[step].uri}
                  alt="Parse Tree"
                  width="300"
                  height="auto"
                />
                <div
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Button variant="contained" onClick={handlePrevious}>
                    previous
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    next
                  </Button>
                </div>
              </div>
            </Grid>
          ) : null}
        </Grid>
      </div>
    </Box>
  );
}

export default Task5;
