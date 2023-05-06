import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
  openModal: false,
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
    }
  }
})

export const {setOpenAside, setOpenModal} = appSlice.actions;
export default appSlice.reducer;