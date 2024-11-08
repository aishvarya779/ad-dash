import React from 'react';
import Layout from '../components/Layout';
// import Avatar from '@mui/core/Avatar';
// import Button from '@mui/core/Button';
// import CssBaseline from '@mui/core/CssBaseline';
// import TextField from '@mui/core/TextField';
// import FormControlLabel from '@mui/core/FormControlLabel';
// import Checkbox from '@mui/core/Checkbox';
// import Link from '@mui/core/Link';
// import Paper from '@mui/core/Paper';
// import Box from '@mui/core/Box';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Container,
  Grid2,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginBg from './../images/login_bg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LoginBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Signup = () => {
  const classes = useStyles();
  return (
    <>
      
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid2 container spacing={2}>
                <Grid2 item size={{xs: 12, sm: 6}}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid2>
                <Grid2 item size={{xs: 12, sm: 6}}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid2>
                <Grid2 item size={{xs: 12,}}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid2>
              </Grid2>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                sx={{my:2}}
              >
                Sign Up
              </Button>
              <Grid2 container justify="flex-end">
                <Grid2 item>
                  <Link to={"/login"} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid2>
              </Grid2>
            </form>
          </div>
          {/* <Box mt={5}>
        <MadeWithLove />
      </Box> */}
        </Container>
    </>
  );
};

export default Signup;
