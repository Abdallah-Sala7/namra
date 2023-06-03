import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  betData: [],
  activeTap: "tab1",
  playersData: [],
  chooseScorer: "",
  isPredicted: false,
};

export const betSlice = createSlice({
  name: "betModal",
  initialState,
  reducers: {
    setActiveTap: (state, action) => {
      state.activeTap = action.payload;
    },

    setChooseScorer: (state, action) => {
      state.chooseScorer = action.payload;
    },

    setBetData: (state, action) => {
      state.betData = action.payload;
    },

    setPlayersData: (state, action) => {
      state.playersData = action.payload;
    },

    setIsPredicted: (state, action) => {
      state.isPredicted = action.payload;
    },
  },
});

export const {
  setActiveTap,
  setChooseScorer,
  setBetData,
  setPlayersData,
  setIsPredicted,
} = betSlice.actions;
export default betSlice.reducer;
