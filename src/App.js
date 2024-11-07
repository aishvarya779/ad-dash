// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme();
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>

    </div>
  );
};

export default App;
