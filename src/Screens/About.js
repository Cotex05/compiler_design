/* eslint-disable react/jsx-no-target-blank */
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CardBox = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 300 }} style={{ elevation: 5, margin: 10 }}>
      <CardActionArea>
        <Box style={{ alignItems: "center", margin: 10 }}>
          <Avatar
            alt="Profile Image"
            src={data.img}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ fontWeight: "800" }}
          >
            Institute of Engineering and Management
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: "#007" }}
          >
            Information Technology
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a style={{ color: "#007fff" }} href={data.link} target={"_blank"}>
          <LinkedInIcon />
        </a>
      </CardActions>
    </Card>
  );
};

function About() {
  const data = [
    {
      name: "Md Danish Shamim",
      img: require("../assets/danish.png"),
      link: "https://www.linkedin.com/in/md-danish-shamim-a032751b1/",
    },
    {
      name: "Md Faisal Farooquee",
      img: require("../assets/faisal.png"),
      link: "https://www.linkedin.com/in/md-faisal-farooquee/",
    },
    {
      name: "Anshu Kumar",
      img: require("../assets/anshu.png"),
      link: "https://www.linkedin.com/in/anshu-kumar-736310213",
    },
    {
      name: "BISHWAJEET RANA",
      img: require("../assets/biswajeet.png"),
      link: "https://www.linkedin.com/in/bishwajeet-rana-331352188/",
    },
    {
      name: "Bipul",
      img: require("../assets/bipul.png"),
      link: "https://www.linkedin.com/in/bipul-kumar-882327202/",
    },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Box style={{ flexDirection: "row" }}>
        <Typography variant="h4">Our Team Members</Typography>
        <Grid container spacing={2}>
          {data.map((item, id) => {
            return (
              <Grid item lg={3}>
                <CardBox data={item} key={id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
