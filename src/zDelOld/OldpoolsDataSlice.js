import { createSlice } from '@reduxjs/toolkit';
import { poolData } from '../../data';
import {
  getAddress,
  getFeaturedPoolsData,
  currentTimeDate,
} from '../../utils/helper';

const featureddata = getFeaturedPoolsData();
const closedData = poolData.filter(
  (item) => currentTimeDate() > item.finishTime
);
const upcomingData = poolData.filter(
  (item) => currentTimeDate() < item.startTime
);

const ongoingdata = poolData.filter(
  (item) =>
    currentTimeDate() < item.finishTime && currentTimeDate() > item.startTime
);

const initialState = {
  featuredData: featureddata,
  closedPoolData: closedData,
  upcomingPoolData: upcomingData,
  ongoingPoolData: ongoingdata,
  address: getAddress(poolData),
  minAllocation: {},
  maxAllocation: {},
  ICOCompletePercentage: {},
  maxDistributionTokens: {},
  allocationTokens: {},
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
    addMaxDistributionTokens: (state, action) => {
      state.maxDistributionTokens = {
        ...state.maxDistributionTokens,
        ...action.payload,
      };
    },
    addAllocationTokens: (state, action) => {
      state.allocationTokens = {
        ...state.allocationTokens,
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
  addAllocationTokens,
  addMaxDistributionTokens,
  addMinAllocation,
  addMaxAllocation,
  addICOCompletePercentage,
} = poolsDataSlice.actions;

export default poolsDataSlice.reducer;
