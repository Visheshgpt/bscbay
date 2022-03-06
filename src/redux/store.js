import { configureStore, compose } from '@reduxjs/toolkit';
import poolsDataReducer from './slices/poolsDataSlice';
import dexpadDataReducer from './slices/dexpadDataSlice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  {
    reducer: {
      pooldata: poolsDataReducer,
      dexpaddata: dexpadDataReducer,
    },
  },
  composeEnhancers()
);
