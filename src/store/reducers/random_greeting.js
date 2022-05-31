import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getRandomGreeting = createAsyncThunk('randomGreeting', async () => {
  const { data } = await axios.get('http://127.0.0.1:3000/v1/greetings/random');
  return data;
});

const randomGreetingSlice = createSlice({
  name: 'randomGreeting',
  initialState: {
    greeting: {},
  },
  reducers: {},
  extraReducers: {
    [getRandomGreeting.fulfilled]: (state, { payload }) => ({ ...state, greeting: payload }),
  },
});

export { getRandomGreeting, randomGreetingSlice };
