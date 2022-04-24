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
    title: "About",
    path: "/about",
  },
];

const topics = [
  {
    title: "Lab 1",
    path: "/task1",
  },
  {
    title: "Lab 2",
    path: "/task2",
  },
  {
    title: "Lab 3",
    path: "/task3",
  },
  {
    title: "Lab 4",
    path: "/task4",
  },
  {
    title: "Lab 5",
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
          <Toolbar>
            <Typography variant="h5" noWrap component="div">
              Compiler Design Lab
            </Typography>
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
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
