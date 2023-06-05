import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
  openModal: false,
  matchesTab: "all-matches",
  singleMatchTab: "bet-tab",
  daysTab: new Date().toDateString(),
  selectionDateRange: {
    start: new Date().toDateString(),
    end: new Date().toDateString(),
  },

  matchsRange: {
    start: new Date().toDateString(),
    end: new Date().toDateString(),
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

    setMatchsRange: (state, action) => {
      state.matchsRange = action.payload;
    }
  },
});

export const {
  setOpenAside,
  setOpenModal,
  setMatchesTab,
  setDaysTab,
  setSingleMatchTab,
  setSelectionDateRange,
  setMatchsRange
} = appSlice.actions;
export default appSlice.reducer;
