import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  betData: [],
  activeTap: "tab1",
  playersData: [],
  chooseScorer: "",
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
  },
});

export const {
  setActiveTap,
  setChooseScorer,
  setBetData,
  setPlayersData,
} = betSlice.actions;
export default betSlice.reducer;
