import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { JsonToTable } from "react-json-to-table";

function Task3() {
  const defaultCode = `int main()
{
    printf("Hello World");
    return 0;
}`;

  const [code, setCode] = useState(defaultCode);

  const [analyzing, setAnalyzing] = useState(false);

  const [message, setMessage] = useState("");

  const [data, setData] = useState([]);

  const handleAnalyze = () => {
    var raw = JSON.stringify({
      code: code,
    });

    setAnalyzing(true);

    fetch("https://lexical-analyzer-c.herokuapp.com/analyze", {
      method: "POST",
      body: raw,
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          const tokens = result.filter(
            (value) => value.type !== "LineFeed"
          ).length;
          setMessage(`Total number of tokens: ${tokens}`);
          setData(result);
          setAnalyzing(false);
        }, 1500);
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h5" style={{ margin: 10, fontWeight: "bold" }}>
        To design a Lexical analyzer for C language.
      </Typography>
      <Typography paragraph>
        Given line of code as user input, representing a block of code/snippet,
        the task is to detect tokens in a C program called the lexical analysis
        of a compiler. Hence, this simulator is referred to as the lexical
        analyzer. The lexical analyzer is a part of the compiler that detects
        tokens of a program and sends it to the syntax analyzer. Token is the
        smallest logical unit of a program and can be of the following types:
      </Typography>
      <Typography style={{ fontFamily: "monospace" }}>
        <ul>
          <li>Keywords/ Function Names</li>
          <li>Identifier</li>
          <li>String Constants</li>
          <li>Special Characters</li>
          <li>Operators</li>
        </ul>
      </Typography>
      <Typography paragraph style={{ margin: 20, fontFamily: "monospace" }}>
        <a href="https://compiler-lab.web.app/docs">Read More...</a>
      </Typography>
      <Box>
        <CodeMirror
          value={code}
          height="300px"
          onChange={(value) => {
            setCode(value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{ margin: 12, height: 50 }}
        onClick={handleAnalyze}
        disabled={analyzing}
      >
        {analyzing ? (
          <>
            <p>{`Analyzing `}</p>
            <CircularProgress color="error" size={20} />
          </>
        ) : (
          "Analyze"
        )}
      </Button>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {message.trim().length > 0 ? (
          <>
            <Alert
              onClose={() => {
                setMessage("");
              }}
              severity="success"
            >
              {message}
            </Alert>
            <br />
            <JsonToTable
              json={data.filter((value) => value.type !== "LineFeed")}
            />
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default Task3;
