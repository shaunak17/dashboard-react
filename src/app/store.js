import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/slices/userSlice';

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
