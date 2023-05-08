import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
  openModal: false,
  matchesTab:"all-matches"
}

export const appSlice = createSlice({
  name :'app',
  initialState,
  reducers:{
    setOpenAside:(state) => {
      state.openAside = !state.openAside;
    },

    setOpenModal:(state, action) => {
      state.openModal = action.payload;
    },

    setMatchesTab:(state, action) => {
      state.matchesTab = action.payload;
    }
  }
})

export const {setOpenAside, setOpenModal, setMatchesTab} = appSlice.actions;
export default appSlice.reducer;