import { configureStore } from '@reduxjs/toolkit';
import { randomGreetingSlice } from './reducers/random_greeting';

const store = configureStore({
  reducer: {
    randomGreeting: randomGreetingSlice.reducer,
  },
});

export default store;
