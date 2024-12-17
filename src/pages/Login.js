import React, { useState } from 'react';
// import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebase';
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
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

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
  const navigate = useNavigate();
  const classes = useStyles();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event,
    reason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const SignInWithEmail = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      console.error('Provide Email and Password');
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );

      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('login', user.accessToken);
      navigate('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      handleClick()
      console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
    }
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Grid2 container component="main" className={classes.root}>
        <CssBaseline />
        <Grid2 size={{ sm: 4, md: 7 }} className={classes.image} />
        <Grid2
          size={{ xs: 12, sm: 8, md: 5 }}
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
            <form className={classes.form} onSubmit={SignInWithEmail}>
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
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
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
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
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
              <Grid2
                container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Grid2>
                  <Link to={'#'} variant="body2">
                    Forgot password?
                  </Link>
                </Grid2>
                <Grid2>
                  <Link to={'/signup'} variant="body2">
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
      <Snackbar
      anchorOrigin={{vertical: 'top',
        horizontal: 'right',}}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Please provide valid credentials!!
        </Alert>
        </Snackbar>
    </>
  );
};

export default Login;
