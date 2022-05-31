import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RandomGreeting from './components/RandomGreeting';

const Views = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="random_greeting" element={<RandomGreeting />} />
  </Routes>
);

export default Views;
