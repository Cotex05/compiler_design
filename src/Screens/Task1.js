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
      <h2>Check whether a given string is comment or not.</h2>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi.
      </Typography>
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
