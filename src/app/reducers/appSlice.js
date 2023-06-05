import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
  openModal: false,
  matchesTab: "all-matches",
  singleMatchTab: "bet-tab",
  daysTab: new Date().toISOString().slice(0, 10),
  selectionDateRange: {
    start: new Date().toJSON(),
    end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toJSON(),
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenAside: (state) => {
      state.openAside = !state.openAside;
    },

    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },

    setMatchesTab: (state, action) => {
      state.matchesTab = action.payload;
    },

    setDaysTab: (state, action) => {
      state.daysTab = action.payload;
    },

    setSingleMatchTab: (state, action) => {
      state.singleMatchTab = action.payload;
    },

    setSelectionDateRange: (state, action) => {
      state.selectionDateRange = action.payload;
    },
  },
});

export const {
  setOpenAside,
  setOpenModal,
  setMatchesTab,
  setDaysTab,
  setSingleMatchTab,
  setSelectionDateRange,
} = appSlice.actions;
export default appSlice.reducer;
