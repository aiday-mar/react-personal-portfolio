import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

// Grow - Material UI
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
  },
}));

// Card - Material UI
const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 10px 40px -12px rgba(0,0,0,0.7)',
    '&:hover': {
      boxShadow: '0 20px 80px -12.125px rgba(0,0,0,0.7)',
    },
  },
  media: {
    paddingTop: '56.25%',
  },
  content: {
    textAlign: 'left',
    padding: muiBaseTheme.spacing.unit * 3,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
});

function CardPannelLeft({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={'https://cpi.ch/wp-content/uploads/2021/07/Angular.png'}
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Angular
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          I have developed a travelling website using Angular, which integrates
          shopping functionality
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
        image={'https://i.morioh.com/2019/11/15/2d0baf6e8708.jpg'}
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          React, Websocket.io, Node.JS, GraphQL
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          This is a studying application based on React, Websocket and GraphQL,
          wherein you can chat and take notes
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
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          React Portfolio
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          This website was built using React. Here are the details.
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelLeft2({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={'https://pic.clubic.com/v1/images/1193268/raw'}
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Android Application
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Social platform android application built using Java
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelMiddle2({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTJCmjSWu0wfjp_oI87HUs1jM1d68L0Sv0XrAhBAwgm3xkqyq0qzKngLP394a3AjD5Bw&usqp=CAU'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Spark
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Scala-based program which recommends movies. It uses the 100k-len
          dataset.
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelRight2({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://s3.ap-south-1.amazonaws.com/techleerimages/0f1b1b40-08f0-467d-9a35-0f0fe71e0a43.png'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Keras, Python
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Using Keras to train neural networks in order to classify images with
          numbers
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelLeft3({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://accu-web.co.uk/wp-content/uploads/2019/01/asp.net-border-526x335.png'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          ASP .NET
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Making a simple website using the .NET framework
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelMiddle3({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          C++ Algorithms
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Building C++ algorithms to compute the eigenvalues of a matrix
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardPannelRight3({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://jtes.net/wp-content/uploads/2015/05/NVIDIA_CUDA_V_2C_r.jpg'
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          MPI/CUDA
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Using MPI and CUDA to optimize the execution of the Poisson algorithm
        </Typography>
      </CardContent>
    </Card>
  );
}

const CardLeft = withStyles(styles)(CardPannelLeft);
const CardLeft2 = withStyles(styles)(CardPannelLeft2);
const CardLeft3 = withStyles(styles)(CardPannelLeft3);
const CardMiddle = withStyles(styles)(CardPannelMiddle);
const CardMiddle2 = withStyles(styles)(CardPannelMiddle2);
const CardMiddle3 = withStyles(styles)(CardPannelMiddle3);
const CardRight = withStyles(styles)(CardPannelRight);
const CardRight2 = withStyles(styles)(CardPannelRight2);
const CardRight3 = withStyles(styles)(CardPannelRight3);

export default function CardsGrow() {
  const classes = useStyles();

  // data-aos="zoom-in" data-aos-offset='20' data-aos-once='true'
  return (
    <div style={{ paddingBottom: '100px'}}>
      <Box>
        <Box display="flex" justifyContent="center" mt="50px">
          <Link
            to={{
              pathname: '/project/4',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardLeft />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/5',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardMiddle />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/6',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardRight />
              </Paper>
            </div>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" mt="50px">
          <Link
            to={{
              pathname: '/project/7',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardLeft2 />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/1',
              state: {
                postTitle: 'Spark',
                postContent: '<p> Describe spark</p>',
              },
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardMiddle2 />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/3',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardRight2 />
              </Paper>
            </div>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" mt="50px">
          <Link
            to={{
              pathname: '/project/8',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardLeft3 />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/9',
              state: {
                postTitle: 'C++ algorithms',
                postContent: '<p> Describe how eigenvalues were found</p>',
              },
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardMiddle3 />
              </Paper>
            </div>
          </Link>
          <Link
            to={{
              pathname: '/project/2',
            }}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <Paper elevation={4} className={classes.paper}>
                <CardRight3 />
              </Paper>
            </div>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
