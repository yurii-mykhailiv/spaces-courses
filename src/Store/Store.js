import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice/Slice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;