import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Alert,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";

function Task3() {
  const defaultCode = `
    #include <stdio.h>

    int main()
    {
        printf("Hello World");
    
        return 0;
    }`;

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h6" style={{ margin: 10 }}>
        To design a Lexical analyzer for C language.
      </Typography>
      <Typography paragraph style={{ margin: 10 }}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Consequat mauris nunc congue nisi
        vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
        dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
        sit amet volutpat consequat mauris. Elementum eu facilisis sed odio
        morbi.
      </Typography>
      <Box>
        <TextareaAutosize
          label="Write C code"
          defaultValue={defaultCode}
          variant="standard"
          minRows={10}
          multiline
          style={{
            width: "80vw",
            backgroundColor: "#eee",
            borderRadius: 10,
            padding: 10,
            fontFamily: "monospace",
            fontSize: 18,
          }}
        />
      </Box>
      <Button variant="contained" style={{ margin: 12 }}>
        Analyze
      </Button>
    </Box>
  );
}

export default Task3;
