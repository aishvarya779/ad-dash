import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './../styles/CommonStyles.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='container'>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
