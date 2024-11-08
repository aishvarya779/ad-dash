import React from 'react';
// import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  Typography,
  Checkbox,
  Paper,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Grid2,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Grid2 container component="main" className={classes.root}>
        <CssBaseline />
        <Grid2 item xs={false} size={{sm:4, md:7}} className={classes.image} />
        <Grid2
          item
          size={{xs:12, sm:8, md:5}}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid2 container sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid2 item xs>
                  <Link to={"#"} variant="body2">
                    Forgot password?
                  </Link>
                </Grid2>
                <Grid2 item>
                  <Link to={"/signup"} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid2>
              </Grid2>
              {/* <Box mt={5}>
                <MadeWithLove />
              </Box> */}
            </form>
          </div>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Login;
