import { createSlice } from '@reduxjs/toolkit';
import { poolsData } from '../../data';
import { getAddress, currentTimeDate } from '../../utils/helper';

const idoDataArray = poolsData.filter((item) => item.type === 'ido');
const staticDataArray = poolsData.filter((item) => item.type === 'static');
const poolsDataArray = poolsData.filter((item) => item.type === 'normal');

let staticIDData = {};
staticDataArray.forEach(
  (item) =>
    (staticIDData = {
      ...staticIDData,
      min: {
        ...staticIDData?.['min'],
        [item.id]: item.minAllocation,
      },
      max: {
        ...staticIDData?.['max'],
        [item.id]: item.maxAllocation,
      },
      ico: {
        ...staticIDData?.['ico'],
        [item.id]: 0,
      },
    })
);

const closedData = poolsData.filter(
  (item) => currentTimeDate() > item.finishTime
);
const upcomingData = poolsData.filter(
  (item) => currentTimeDate() < item.startTime || item.type === 'static'
);
const ongoingData = poolsData.filter(
  (item) =>
    currentTimeDate() < item.finishTime &&
    currentTimeDate() > item.startTime &&
    item.type !== 'static'
);

const initialState = {
  poolsDataArray: poolsData,
  staticAddress: getAddress(staticDataArray),
  idoAddress: getAddress(idoDataArray),
  address: getAddress(poolsDataArray),
  closedData,
  upcomingData,
  ongoingData,
  minAllocation: {
    static: { ...staticIDData['min'] },
  },
  maxAllocation: {
    static: { ...staticIDData['max'] },
  },
  ICOCompletePercentage: {
    static: { ...staticIDData['ico'] },
  },
  maxDistributionTokens: {},
  allocationTokens: {},
};

export const poolsDataSlice = createSlice({
  name: 'poolsdataslice',
  initialState,
  reducers: {
    addMinAllocations: (state, action) => {
      const { type, pay } = action.payload;
      state.minAllocation = {
        ...state.minAllocation,
        [type]: { ...state.minAllocation[type], ...pay },
      };
    },
    addMaxAllocations: (state, action) => {
      const { type, pay } = action.payload;
      state.maxAllocation = {
        ...state.maxAllocation,
        [type]: { ...state.maxAllocation[type], ...pay },
      };
    },
    addICOCompletePercentage: (state, action) => {
      const { type, pay } = action.payload;
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        [type]: { ...state.ICOCompletePercentage[type], ...pay },
      };
    },
    addMaxDistributionTokens: (state, action) => {
      const { type, pay } = action.payload;
      state.maxDistributionTokens = {
        ...state.maxDistributionTokens,
        [type]: { ...state.maxDistributionTokens[type], ...pay },
      };
    },
    addAllocationTokens: (state, action) => {
      const { type, pay } = action.payload;
      state.allocationTokens = {
        ...state.allocationTokens,
        [type]: { ...state.allocationTokens[type], ...pay },
      };
    },
    updateICOCompletePercentage: (state, action) => {
      const { type, pay } = action.payload;
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        [type]: { ...state.ICOCompletePercentage[type], ...pay },
      };
    },
  },
});

export const {
  addMinAllocations,
  addMaxAllocations,
  addICOCompletePercentage,
  addAllocationTokens,
  addMaxDistributionTokens,
} = poolsDataSlice.actions;

export default poolsDataSlice.reducer;
