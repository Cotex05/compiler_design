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
      <Typography variant="h6" style={{ margin: 10 }}>
        To design an online simulator that checks whether a user input string is
        a valid identifier or not.
      </Typography>
      <Typography paragraph style={{ margin: 10 }}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi.
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
