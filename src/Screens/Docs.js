import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function Docs() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Box sx={{ p: 1 }}>
        <Accordion style={{ backgroundColor: "#eee" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" id="task1">
              1. Check Whether a String is a Valid Comment or Not?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Aim</Typography>
            <Typography paragraph>
              To design an online simulator that checks whether a given input
              string is a single/multi-line comment or not.
            </Typography>
            <Typography variant="h6">Theory</Typography>
            <Typography paragraph>
              Given a string as user input, representing a program snippet, the
              task is to check if the given string is a single/multi-line
              comment or not.
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              * Single Line Comment: Comments preceded by a Double Slash ('//')
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              * Multi-line Comment: Comments starting with ('/*') and ending
              with ('*/')
            </Typography>
            <Typography variant="h6">Algorithm</Typography>
            <Typography paragraph>
              Check if at the first Index(i.e. index 0) the value is '/' then
              follow below steps else print "Given input string is not a
              comment!".
              <ul>
                <li style={{ fontFamily: "monospace" }}>
                  If line[0] == '/': If line[1] == '/', then print "Given input
                  string is a comment!".
                </li>
                <li style={{ fontFamily: "monospace" }}>
                  If line[1] == '*', then traverse the string and if any
                  adjacent pair of '*' & '/' is found then print "Given input
                  string is a comment!".
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">Simulator</Typography>
            <Typography paragraph>
              <a href="https://compiler-lab.web.app/task1">Click here</a> to
              simulate this.
            </Typography>
            <Typography variant="h6">Discussion</Typography>
            <Typography paragraph>
              The frontend is designed with React Framework and using the
              javascript language. The implementation is done for C programming
              language where the simulator takes a string as user input and
              checks whether it is a single/multi-line comment or not.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ p: 1 }}>
        <Accordion style={{ backgroundColor: "#eee" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">
              2. Check Whether an Identifier is Valid or Not?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Aim</Typography>
            <Typography paragraph>
              To design an online simulator that checks whether a user input
              string is a valid or invalid identifier.
            </Typography>
            <Typography variant="h6">Theory</Typography>
            <Typography paragraph>
              Given a string as user input, representing a string, the task is
              to check if the string is a valid identifier or not. In order to
              qualify as a valid identifier, the string must satisfy all the
              following conditions:
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              <ul>
                <li>
                  It must start with either ('_', '$') or any of the characters
                  from the ranges ['a', 'z'] and ['A', 'Z']
                </li>
                <li>There must not be any white space in the string</li>
                <li>
                  All the subsequent characters after the first character must
                  not consist of any special characters except '$'.
                </li>
                <li>The string must not exceed 31 characters</li>
              </ul>
            </Typography>
            <Typography variant="h6">Algorithm</Typography>
            <Typography paragraph>
              Traverse the string character by character and check whether all
              the requirements are met for it to be a valid identifier i.e.,
              first character can only be either ('_', '$') or an English
              alphabet and the rest of the characters must neither be a white
              space or any special character nor must exceed 31 characters.
            </Typography>
            <Typography variant="h6">Simulator</Typography>
            <Typography paragraph>
              <a href="https://compiler-lab.web.app/task2">Click here</a> to
              simulate this.
            </Typography>
            <Typography variant="h6">Discussion</Typography>
            <Typography paragraph>
              The frontend is designed with React Framework and using the
              javascript language. The implementation is done for C programming
              language where the simulator takes a string as user input and
              checks whether it is a valid or invalid identifier.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ p: 1 }}>
        <Accordion style={{ backgroundColor: "#eee" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">3. Create a Lexical Analyzer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Aim</Typography>
            <Typography paragraph>
              To design an online lexical analyzer simulator for C programming
              language that detects token and classifies them into keywords,
              identifiers, special characters and operators while ignoring tab,
              new line and redundant spaces.
            </Typography>
            <Typography variant="h6">Theory</Typography>
            <Typography paragraph>
              Given line of code as user input, representing a block of
              code/snippet, the task is to detect tokens in a C program called
              the lexical analysis of a compiler. Hence, this simulator is
              referred to as the lexical analyzer. The lexical analyzer is a
              part of the compiler that detects tokens of a program and sends it
              to the syntax analyzer. Token is the smallest logical unit of a
              program and can be of the following types:
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              <ul>
                <li>Keywords/ Function Names</li>
                <li>Identifier</li>
                <li>String Constants</li>
                <li>Special Characters</li>
                <li>Operators</li>
              </ul>
              <br />
              <img
                src={require("../assets/lexicalanalyzer.png")}
                alt="Parse Tree"
                height="auto"
                width="500"
                style={{ margin: 10 }}
              />
            </Typography>
            <Typography variant="h6">Algorithm</Typography>
            <Typography paragraph>
              Traverse the input program snippet character by character
              Tokenization i.e., dividing the program into valid tokens then
              remove tab and white space characters. Also remove comments and
              the rest parts of the program that are meant for the understanding
              of the user and are in no way needed during compilation.
              <ul>
                <li>
                  Place the tokens under each of the below sub-categories:
                  <ul style={{ fontFamily: "monospace" }}>
                    <li>Keywords for the function names</li>
                    <li>Identifiers for the variables</li>
                    <li>
                      String constants for constants with fixed sequence of
                      characters
                    </li>
                    <li>
                      192 Special characters among 256 defined characters by
                      ASCII
                    </li>
                    <li>Operators for the mathematical operations</li>
                  </ul>
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">Simulator</Typography>
            <Typography paragraph>
              <a href="https://compiler-lab.web.app/task3">Click here</a> to
              simulate this.
            </Typography>
            <Typography variant="h6">Discussion</Typography>
            <Typography paragraph>
              The frontend is designed with React Framework and using the
              javascript language. The implementation is done for C programming
              language where the simulation is designed that detects token and
              classifies them into keywords, identifiers, string constants,
              special characters and operators while ignoring tab, new line and
              redundant spaces.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ p: 1 }}>
        <Accordion style={{ backgroundColor: "#eee" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">4. Left and Right Derivation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Aim</Typography>
            <Typography paragraph>
              To design an online Lexical Analyzer simulator to derive leftmost
              derivation tree and rightmost derivation tree from a given grammar
              for a goal string.
            </Typography>
            <Typography variant="h6">Theory</Typography>
            <Typography paragraph>
              The process of deriving a string is called as derivation. The
              geometrical representation of a derivation is called as a parse
              tree or derivation tree. A derivation is basically a sequence of
              production rules, in order to get the input string. During
              parsing, we take two decisions for some sentential form of input:
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              <ul>
                <li>Deciding the non-terminal which is to be replaced.</li>
                <li>
                  Deciding the production rule, by which, the non-terminal will
                  be replaced.
                </li>
              </ul>
            </Typography>
            <Typography paragraph>
              <p style={{ fontWeight: "bold" }}>
                To decide which non-terminal to be replaced with production
                rule, we can have two options as following:
              </p>
              <ul>
                <li>
                  <strong>Left-most Derivation:</strong> If the sentential form
                  of an input is scanned and replaced from left to right, it is
                  called left-most derivation. The sentential form derived by
                  the left-most derivation is called the left-sentential form.
                </li>
                <li>
                  <strong>Right-most Derivation:</strong> If we scan and replace
                  the input with production rules, from right to left, it is
                  known as right-most derivation. The sentential form derived
                  from the right-most derivation is called the right-sentential
                  form.
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">Algorithm</Typography>
            <Typography paragraph>
              <ul style={{ fontFamily: "monospace" }}>
                <li>
                  First start from Starting symbol and represent it as the root
                  node.
                </li>
                <li>
                  Then check for input symbol and start expanding according to
                  the given grammar.
                </li>
                <li>
                  After that, start elaborating the production i.e., expanding
                  the non-terminals from left to right in case of leftmost
                  derivation tree and from right to left in case of rightmost
                  derivation tree.
                </li>
                <li>
                  Similarly, need to move the expansion for all the production
                  until we achieve the goal string.
                </li>
              </ul>
              <br />
              <img
                src={require("../assets/leftmostderivation.png")}
                alt="left-most derivation"
                height="auto"
                width="600"
                style={{ margin: 10 }}
              />
            </Typography>
            <Typography variant="h6">Simulator</Typography>
            <Typography paragraph>
              <a href="https://compiler-lab.web.app/task4">Click here</a> to
              simulate this.
            </Typography>
            <Typography variant="h6">Discussion</Typography>
            <Typography paragraph>
              The frontend is designed with React Framework and using the
              javascript language. The concept of left and right derivation tree
              are implementated.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ p: 1 }}>
        <Accordion style={{ backgroundColor: "#eee" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">5. Generate Parse Tree</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Aim</Typography>
            <Typography paragraph>
              To design an online simulator that implements a Parser (Non
              Recursive Descent- parser) for the given grammar.
            </Typography>
            <Typography variant="h6">Theory</Typography>
            <Typography paragraph>
              A parse tree is an ordered tree in which nodes are labeled with
              the left side of the productions and in which the children of a
              node define its equivalent right parse tree also known as syntax
              tree, generation tree, or production tree.
              <ul style={{ fontFamily: "monospace" }}>
                <li>
                  A parser generator takes a grammar as input and automatically
                  generates source code that can parse streams of characters
                  using the grammar.
                </li>
                <li>
                  The generated code is a parser, which takes a sequence of
                  characters and tries to match the sequence against the
                  grammar.
                </li>
                <li>
                  The parser typically produces a parse tree, which shows how
                  grammar productions are expanded into a sentence that matches
                  the character sequence.
                </li>
                <li>
                  The root of the parse tree is the starting nonterminal of the
                  grammar.
                </li>
                <li>
                  Each node of the parse tree expands into one production of the
                  grammar.
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">Algorithm</Typography>
            <Typography paragraph>
              <ul style={{ fontFamily: "monospace" }}>
                <li>
                  First start from Starting symbol and represent it as the root
                  node.
                </li>
                <li>
                  Then check for input symbol and start expanding according to
                  the given grammar.
                </li>
                <li>
                  After that, start elaborating the production i.e., expanding
                  the non-terminals from left to right in case of leftmost
                  derivation tree and from right to left in case of rightmost
                  derivation tree.
                </li>
                <li>
                  Similarly, need to move the expansion for all the production
                  until we achieve the goal string.
                </li>
              </ul>
              <br />
              <p>
                Let us take an example of a Grammar (Production Rules).
                <ul>
                  <li>{`S -> sAB`}</li>
                  <li>{`A -> a`}</li>
                  <li>{`B -> b`}</li>
                </ul>
                The input string is “sab”, then the Parse Tree is :
              </p>
              <br />
              <img
                src={require("../assets/parsetree.png")}
                alt="Parse Tree"
                height="auto"
                width="300"
                style={{ margin: 10 }}
              />
            </Typography>
            <Typography variant="h6">Simulator</Typography>
            <Typography paragraph>
              <a href="https://compiler-lab.web.app/task5">Click here</a> to
              simulate this.
            </Typography>
            <Typography variant="h6">Discussion</Typography>
            <Typography paragraph>
              The frontend is designed with React Framework and using the
              javascript language. The simulator takes a Grammar(Production
              Rules) as user input and generate the corresponding parse trees
              according to the grammar/ production rules.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Docs;
