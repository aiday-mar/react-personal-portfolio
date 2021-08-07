import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Grow - Material UI
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

// Card - Material UI
const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
});

function CardPannelLeft({ classes }) {

  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Card 1 
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            Project number one is done. Add the text corresponding to this card.
          </Typography>
        </CardContent>
      </Card>
  );
}

function CardPannelMiddle({ classes }) {
  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Card 2 
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            Project number second is done. Add the text corresponding to this card.
          </Typography>
        </CardContent>
      </Card>
  );
}

function CardPannelRight({ classes }) {
  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Card 3
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            Project number third is done. Add the text corresponding to this card.
          </Typography>
        </CardContent>
      </Card>
  );
}

const CardLeft = withStyles(styles)(CardPannelLeft);
const CardMiddle = withStyles(styles)(CardPannelMiddle);
const CardRight = withStyles(styles)(CardPannelRight);

export default function CardsGrow() {

  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Grow appear={true} in={true} >
          <Paper elevation={4} className={classes.paper}>
            <CardLeft/>
          </Paper>
        </Grow>
        <Grow appear={true} in={true} {...(true ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
            <CardMiddle/>
          </Paper>
        </Grow>
        <Grow appear={true} in={true} {...(true ? { timeout: 2000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
            <CardRight/>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
