// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

import { createTheme, ThemeProvider} from '@mui/material';
import ProtectedRoute from './components/ProtectedRoute';

const theme = createTheme();
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Redirect to='/login'/> */}
          <Route path="/" element={<ProtectedRoute Component={Home} />} />*
          <Route path="/about" element={<ProtectedRoute Component={About}/>} />
          <Route path="/contact" element={<ProtectedRoute Component={Contact}/>} />
          <Route path="/profile" element={<ProtectedRoute Component={Profile}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/home" element={<Home/>} />  */}
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>

    </div>
  );
};

export default App;
