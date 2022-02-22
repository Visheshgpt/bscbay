import { createSlice } from '@reduxjs/toolkit';
import { poolData } from '../../data';
import {
  getAddress,
  getFeaturedPoolsData,
  currentTimeData,
} from '../../utils/helper';

const featureddata = getFeaturedPoolsData();
const closedData = poolData.filter(
  (item) => currentTimeData() > item.finishTime
);
const upcomingData = poolData.filter(
  (item) => currentTimeData() < item.startTime
);

const ongoingdata = poolData.filter(
  (item) =>
    currentTimeData() < item.finishTime && currentTimeData() > item.startTime
);

const initialState = {
  featuredData: featureddata,
  closedPoolData: closedData,
  upcomingPoolData: upcomingData,
  ongoingPoolData: ongoingdata,
  address: getAddress(),
  minAllocation: {},
  maxAllocation: {},
  ICOCompletePercentage: {},
};

export const poolsDataSlice = createSlice({
  name: 'poolsdataslice',
  initialState,
  reducers: {
    addMinAllocation: (state, action) => {
      state.minAllocation = { ...state.minAllocation, ...action.payload };
    },
    addMaxAllocation: (state, action) => {
      state.maxAllocation = { ...state.maxAllocation, ...action.payload };
    },
    addICOCompletePercentage: (state, action) => {
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        ...action.payload,
      };
    },

    updateICOCompletePercentage: (state, action) => {
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        ...action.payload,
      };
    },
  },
});

export const {
  updateICOCompletePercentage,
  addMinAllocation,
  addMaxAllocation,
  addICOCompletePercentage,
} = poolsDataSlice.actions;

export default poolsDataSlice.reducer;
