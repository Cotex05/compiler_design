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

function Task4() {
  const [derivation, setDerivation] = useState("");

  const grammar = "E → E + E\nE → E * E\nE → id";

  const ldr =
    "E → E * E\nE → E + E * E\nE → id + E * E\nE → id + id * E\nE → id + id * id";

  const rdr =
    "E → E + E\nE → E + E * E\nE → E + E * id\nE → E + id * id\nE → id + id * id";

  const [generated, setGenerated] = useState(false);

  const [step, setStep] = useState(0);

  const images = [
    {
      uri: require("../assets/p1.png"),
    },
    {
      uri: require("../assets/p2.png"),
    },
    {
      uri: require("../assets/p3.png"),
    },
    {
      uri: require("../assets/p4.png"),
    },
    {
      uri: require("../assets/p5.png"),
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
      alert("This is the very first step.");
    }
  };

  const handleLeftDerivation = () => {
    setDerivation("left");
    setGenerated(true);
  };

  const handleRightDerivation = () => {
    setDerivation("right");
    setGenerated(false);
    setStep(0);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div style={{ margin: 20 }}>
        <Typography variant="h5" style={{ margin: 10, fontWeight: "bold" }}>
          Left Most Derivation and Right Most Derivation
        </Typography>
        <Typography paragraph style={{ margin: 10 }}>
          A derivation is basically a sequence of production rules, in order to
          get the input string. During parsing, we take two decisions for some
          sentential form of input:
        </Typography>
        <Typography paragraph style={{ margin: 10, fontFamily: "serif" }}>
          - Deciding the non-terminal which is to be replaced.
        </Typography>
        <Typography paragraph style={{ margin: 10, fontFamily: "serif" }}>
          - Deciding the production rule, by which, the non-terminal will be
          replaced.
        </Typography>
        <Typography paragraph style={{ margin: 10, fontFamily: "monospace" }}>
          <a href="https://compiler-lab.web.app/docs">Read More...</a>
        </Typography>
      </div>
      <div style={{ marginTop: 70, marginLeft: 20, padding: 10 }}>
        <Grid container spacing={10}>
          <Grid item lg={4}>
            <TextareaAutosize
              label="write grammar"
              defaultValue={grammar}
              variant="standard"
              minRows={5}
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
            <Stack>
              <Button
                variant="contained"
                style={{ margin: 12 }}
                onClick={handleLeftDerivation}
              >
                {"Left Derivation >>"}
              </Button>
              <Button
                variant="contained"
                style={{ margin: 12 }}
                onClick={handleRightDerivation}
              >
                {"Right Derivation >>"}
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={4}>
            {derivation !== "" ? (
              <TextareaAutosize
                value={derivation === "left" ? ldr : rdr}
                variant="standard"
                minRows={5}
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
            ) : null}
          </Grid>
          {generated ? (
            <Grid item lg={4}>
              <div style={{ margin: "auto", width: 250 }}>
                <img
                  src={images[step].uri}
                  alt="Parse Tree"
                  width="250"
                  height="auto"
                />
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
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

export default Task4;
