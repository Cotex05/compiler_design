# Compiler Design Lab Simulator

### Various tasks are implemented for C language with simulation as following:
* To design an online simulator that checks whether a user input string is a comment or not.
* To design an online simulator that checks whether a user input string is a valid identifier or not.
* To design a Lexical analyzer for C language.
* Left Most Derivation and Right Most Derivation.
* Parse Tree Generation.

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Live [Demo](https://compiler-lab.web.app/)

## Documentation
### Aim
To design an online simulator that checks whether a given input string is a single/multi-line comment or not.

### Theory
Given a string as user input, representing a program snippet, the task is to check if the given string is a single/multi-line comment or not.

* Single Line Comment: Comments preceded by a Double Slash ('//')

* Multi-line Comment: Comments starting with ('/*') and ending with ('*/')

### Algorithm
Check if at the first Index(i.e. index 0) the value is '/' then follow below steps else print "Given input string is not a comment!".
If line[0] == '/': If line[1] == '/', then print "Given input string is a comment!".
If line[1] == '*', then traverse the string and if any adjacent pair of '*' & '/' is found then print "Given input string is a comment!".

### Simulator
Click [here](https://compiler-lab.web.app/task1) to simulate this.

### Discussion
The frontend is designed with React Framework and using the javascript language. The implementation is done for C programming language where the simulator takes a string as user input and checks whether it is a single/multi-line comment or not.

<hr />

### Aim
To design an online simulator that checks whether a user input string is a valid or invalid identifier.

### Theory
Given a string as user input, representing a string, the task is to check if the string is a valid identifier or not. In order to qualify as a valid identifier, the string must satisfy all the following conditions:

It must start with either ('_', '$') or any of the characters from the ranges ['a', 'z'] and ['A', 'Z']
There must not be any white space in the string
All the subsequent characters after the first character must not consist of any special characters except '$'.
The string must not exceed 31 characters

### Algorithm
Traverse the string character by character and check whether all the requirements are met for it to be a valid identifier i.e., first character can only be either ('_', '$') or an English alphabet and the rest of the characters must neither be a white space or any special character nor must exceed 31 characters.

### Simulator
Click [here](https://compiler-lab.web.app/task2) to simulate this.

### Discussion
The frontend is designed with React Framework and using the javascript language. The implementation is done for C programming language where the simulator takes a string as user input and checks whether it is a valid or invalid identifier.

<hr />

### Aim
To design an online lexical analyzer simulator for C programming language that detects token and classifies them into keywords, identifiers, special characters and operators while ignoring tab, new line and redundant spaces.

### Theory
Given line of code as user input, representing a block of code/snippet, the task is to detect tokens in a C program called the lexical analysis of a compiler. Hence, this simulator is referred to as the lexical analyzer. The lexical analyzer is a part of the compiler that detects tokens of a program and sends it to the syntax analyzer. Token is the smallest logical unit of a program and can be of the following types:

Keywords/ Function Names
Identifier
String Constants
Special Characters
Operators

### Algorithm
Traverse the input program snippet character by character Tokenization i.e., dividing the program into valid tokens then remove tab and white space characters. Also remove comments and the rest parts of the program that are meant for the understanding of the user and are in no way needed during compilation.
Place the tokens under each of the below sub-categories:
Keywords for the function names
Identifiers for the variables
String constants for constants with fixed sequence of characters
192 Special characters among 256 defined characters by ASCII
Operators for the mathematical operations

### Simulator
Click [here](https://compiler-lab.web.app/task3) to simulate this.

### Discussion
The frontend is designed with React Framework and using the javascript language. The implementation is done for C programming language where the simulation is designed that detects token and classifies them into keywords, identifiers, string constants, special characters and operators while ignoring tab, new line and redundant spaces.

<hr />

### Aim
To design an online Lexical Analyzer simulator to derive leftmost derivation tree and rightmost derivation tree from a given grammar for a goal string.

### Theory
The process of deriving a string is called as derivation. The geometrical representation of a derivation is called as a parse tree or derivation tree. A derivation is basically a sequence of production rules, in order to get the input string. During parsing, we take two decisions for some sentential form of input:

Deciding the non-terminal which is to be replaced.
Deciding the production rule, by which, the non-terminal will be replaced.

To decide which non-terminal to be replaced with production rule, we can have two options as following:

Left-most Derivation: If the sentential form of an input is scanned and replaced from left to right, it is called left-most derivation. The sentential form derived by the left-most derivation is called the left-sentential form.
Right-most Derivation: If we scan and replace the input with production rules, from right to left, it is known as right-most derivation. The sentential form derived from the right-most derivation is called the right-sentential form.

### Algorithm
First start from Starting symbol and represent it as the root node.
Then check for input symbol and start expanding according to the given grammar.
After that, start elaborating the production i.e., expanding the non-terminals from left to right in case of leftmost derivation tree and from right to left in case of rightmost derivation tree.
Similarly, need to move the expansion for all the production until we achieve the goal string.

left-most derivation
<img src="https://user-images.githubusercontent.com/61322721/166617605-fb06b3d3-46a0-46cc-82fd-ed31535b9e58.png" width="600" height="auto" />

### Simulator
Click [here](https://compiler-lab.web.app/task4) to simulate this.

### Discussion
The frontend is designed with React Framework and using the javascript language. The concept of left and right derivation tree are implementated.

<hr />

### Aim
To design an online simulator that implements a Parser (Non Recursive Descent- parser) for the given grammar.

### Theory
A parse tree is an ordered tree in which nodes are labeled with the left side of the productions and in which the children of a node define its equivalent right parse tree also known as syntax tree, generation tree, or production tree.
A parser generator takes a grammar as input and automatically generates source code that can parse streams of characters using the grammar.
The generated code is a parser, which takes a sequence of characters and tries to match the sequence against the grammar.
The parser typically produces a parse tree, which shows how grammar productions are expanded into a sentence that matches the character sequence.
The root of the parse tree is the starting nonterminal of the grammar.
Each node of the parse tree expands into one production of the grammar.

### Algorithm
First start from Starting symbol and represent it as the root node.
Then check for input symbol and start expanding according to the given grammar.
After that, start elaborating the production i.e., expanding the non-terminals from left to right in case of leftmost derivation tree and from right to left in case of rightmost derivation tree.
Similarly, need to move the expansion for all the production until we achieve the goal string.

Let us take an example of a Grammar (Production Rules).
S -> sAB
A -> a
B -> b
The input string is “sab”, then the Parse Tree is :

Parse Tree
<img src="https://user-images.githubusercontent.com/61322721/166617715-b91604f9-b015-444d-800a-3a6ab11e9f22.png" width="300" height="auto" />


### Simulator
Click [here](https://compiler-lab.web.app/task5) to simulate this.

### Discussion
The frontend is designed with React Framework and using the javascript language. The simulator takes a Grammar(Production Rules) as user input and generate the corresponding parse trees according to the grammar/ production rules.
