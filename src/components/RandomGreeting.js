import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGreeting } from '../store/reducers/random_greeting';

const RandomGreeting = () => {
  const dispatch = useDispatch();
  const selectState = (state) => state.randomGreeting;
  const { greeting } = useSelector(selectState);
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, []);
  return (
    <h1>{greeting.text}</h1>
  );
};

export default RandomGreeting;
