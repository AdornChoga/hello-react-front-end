import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome Random Greetings</h1>
      <Link to="/random_greeting">Get a random greeting</Link>
    </div>
  )
};

export default Home;