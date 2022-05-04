import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

function Task2() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    e.preventDefault();
    setMessage("");
    setInput(e.target.value);
  };

  const checkForIdentifier = () => {
    if (input.trim().length < 1) {
      alert("Write something first!");
      return;
    }

    const arr = [
      "auto",
      "break",
      "case",
      "char",
      "const",
      "continue",
      "default",
      "do",
      "double",
      "else",
      "enum",
      "extern",
      "float",
      "for",
      "goto",
      "if",
      "int",
      "long",
      "register",
      "return",
      "short",
      "signed",
      "sizeof",
      "static",
      "struct",
      "switch",
      "typedef",
      "union",
      "unsigned",
      "void",
      "volatile",
      "while",
    ];

    if (arr.includes(input.trim())) {
      setMessage(
        `Given input is not a valid identifier, "${input}" is a reserve word in C.`
      );
      return;
    }
    if (input.match(/\s/)) {
      setMessage("Given input is not a valid identifier!");
      return;
    }

    if (input.match(/^[_$a-zA-Z][_a-zA-Z0-9]{0,31}/)) {
      //   alert("Given input string is a comment!");
      setMessage("Given input is a valid identifier!");
    } else {
      //   alert("Not a comment!");
      setMessage("Given input is not a valid identifier!");
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      checkForIdentifier();
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h5" style={{ margin: 10, fontWeight: "bold" }}>
        To design an online simulator that checks whether a user input string is
        a valid identifier or not.
      </Typography>
      <Typography paragraph>
        Given a string as user input, representing a string, the task is to
        check if the string is a valid identifier or not. In order to qualify as
        a valid identifier, the string must satisfy all the following
        conditions:
      </Typography>
      <Typography style={{ fontFamily: "monospace" }}>
        <ul>
          <li>
            It must start with either ('_', '$') or any of the characters from
            the ranges ['a', 'z'] and ['A', 'Z']
          </li>
          <li>There must not be any white space in the string</li>
          <li>
            All the subsequent characters after the first character must not
            consist of any special characters except '$'.
          </li>
          <li>The string must not exceed 31 characters</li>
        </ul>
      </Typography>
      <Typography paragraph style={{ margin: 20, fontFamily: "monospace" }}>
        <a href="https://compiler-lab.web.app/docs">Read More...</a>
      </Typography>
      <TextField
        label="Write an identifier "
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
        onClick={checkForIdentifier}
      >
        Check
      </Button>
      {message.trim().length > 0 ? (
        <Alert
          onClose={() => {
            setMessage("");
          }}
          severity={
            message === "Given input is a valid identifier!"
              ? "success"
              : "error"
          }
        >
          {message}
        </Alert>
      ) : null}
    </Box>
  );
}

export default Task2;
