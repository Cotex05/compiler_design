/* eslint-disable no-useless-escape */
import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

function Task1() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    e.preventDefault();
    setMessage("");
    setInput(e.target.value);
  };

  const checkForComment = () => {
    if (input.trim().length < 1) {
      alert("Write something first!");
      return;
    }
    if (input.match(/^([\/\/]+[\/*])/g)) {
      //   alert("Given input string is a comment!");
      setMessage("Given input string is a comment!");
    } else {
      //   alert("Not a comment!");
      setMessage("Given input string is not a comment!");
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      checkForComment();
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h5" style={{ margin: 10, fontWeight: "bold" }}>
        To design an online simulator that checks whether a user input string is
        a comment or not.
      </Typography>
      <Typography paragraph>
        Given a string as user input, representing a program snippet, the task
        is to check if the given string is a single/multi-line comment or not.
      </Typography>
      <Typography style={{ fontFamily: "monospace" }}>
        * Single Line Comment: Comments preceded by a Double Slash ('//')
      </Typography>
      <Typography style={{ fontFamily: "monospace" }}>
        * Multi-line Comment: Comments starting with ('/*') and ending with
        ('*/')
      </Typography>
      <Typography paragraph style={{ margin: 20, fontFamily: "monospace" }}>
        <a href="https://compiler-lab.web.app/docs">Read More...</a>
      </Typography>
      <br />
      <TextField
        label="Write string here"
        variant="filled"
        color="primary"
        focused
        fullWidth
        value={input}
        onChange={handleTextInput}
        onKeyDown={onEnterPress}
      />
      <Button
        variant="contained"
        style={{ margin: 12 }}
        onClick={checkForComment}
      >
        Check
      </Button>
      {message.trim().length > 0 ? (
        <Alert
          onClose={() => {
            setMessage("");
          }}
          severity={
            message === "Given input string is a comment!" ? "success" : "error"
          }
        >
          {message}
        </Alert>
      ) : null}
    </Box>
  );
}

export default Task1;
