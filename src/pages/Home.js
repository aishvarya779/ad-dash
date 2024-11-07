import React from 'react';
import Layout from '../components/Layout';
import BlueWorld from './../images/blue_world.jpg';
import './../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${BlueWorld})`}}>
      <h1>Home Page</h1>
      </div>
    </Layout>
  );
};

export default Home;
