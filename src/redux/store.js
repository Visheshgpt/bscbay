import { configureStore, compose } from '@reduxjs/toolkit';
import poolsDataReducer from './slices/poolsDataSlice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  {
    reducer: {
      pooldata: poolsDataReducer,
    },
  },
  composeEnhancers()
);
