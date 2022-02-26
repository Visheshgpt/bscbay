import { createSlice } from '@reduxjs/toolkit';
import { dexpaddata } from '../../dexpaddata';
import { getAddress } from '../../utils/helper';

const initialState = {
  dexpadData: dexpaddata,
  dAddress: getAddress(dexpaddata),
  minAllocation: {},
  maxAllocation: {},
  ICOCompletePercentage: {},
  maxDistributionTokens: {},
  allocationTokens: {},
};

export const dexpadDataSlice = createSlice({
  name: 'dexpaddataslice',
  initialState,
  reducers: {
    adddMinAllocation: (state, action) => {
      state.minAllocation = { ...state.minAllocation, ...action.payload };
    },
    adddMaxAllocation: (state, action) => {
      state.maxAllocation = { ...state.maxAllocation, ...action.payload };
    },
    adddICOCompletePercentage: (state, action) => {
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        ...action.payload,
      };
    },
    adddMaxDistributionTokens: (state, action) => {
      state.maxDistributionTokens = {
        ...state.maxDistributionTokens,
        ...action.payload,
      };
    },
    adddAllocationTokens: (state, action) => {
      state.allocationTokens = {
        ...state.allocationTokens,
        ...action.payload,
      };
    },
    updatedICOCompletePercentage: (state, action) => {
      state.ICOCompletePercentage = {
        ...state.ICOCompletePercentage,
        ...action.payload,
      };
    },
  },
});

export const {
  updatedICOCompletePercentage,
  adddAllocationTokens,
  adddMaxDistributionTokens,
  adddMinAllocation,
  adddMaxAllocation,
  adddICOCompletePercentage,
} = dexpadDataSlice.actions;

export default dexpadDataSlice.reducer;
