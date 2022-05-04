import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Docs from "./Screens/Docs";
import Task1 from "./Screens/Task1";
import Task2 from "./Screens/Task2";
import { Avatar, Button } from "@mui/material";
import Task3 from "./Screens/Task3";
import Task4 from "./Screens/Task4";
import Task5 from "./Screens/Task5";

const drawerWidth = 240;

const navs = [
  {
    title: "Overview",
    path: "/",
  },
  {
    title: "Docs",
    path: "/docs",
  },
  {
    title: "About Us",
    path: "/about",
  },
];

const topics = [
  {
    title: "Check Comment",
    path: "/task1",
  },
  {
    title: "Check Identifier",
    path: "/task2",
  },
  {
    title: "Lexical Analyzer",
    path: "/task3",
  },
  {
    title: "Left & Right Derivation",
    path: "/task4",
  },
  {
    title: "Parse Tree",
    path: "/task5",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Avatar
              alt="IEM"
              src={require("./assets/logo.png")}
              sx={{ width: 56, height: 53 }}
              style={{ margin: 10 }}
            />
            <Typography variant="h5" noWrap component="div">
              Compiler Design Lab
            </Typography>
            <Button
              variant="contained"
              color="info"
              target={"_blank"}
              href="https://github.com/Cotex05/compiler_design"
            >
              Github
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {navs.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem button key={item.title}>
                    <Typography variant="h6" noWrap component="div">
                      {item.title}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {topics.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  style={{ color: "#111", textDecoration: "none" }}
                >
                  <ListItem button key={item.title}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      style={{ textOverflow: "ellipsis" }}
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="about" element={<About />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
          <Route path="task5" element={<Task5 />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
