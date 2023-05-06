import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTap: "tab1",
  chooseScorer: "",
}

export const betSlice = createSlice({
  name :'betTap',
  initialState,
  reducers:{
    setActiveTap:(state, action) => {
      state.activeTap = action.payload;
    },

    setChooseScorer:(state, action) => {
      state.chooseScorer = action.payload;
    }
  }
})

export const {setActiveTap, setChooseScorer} = betSlice.actions;
export default betSlice.reducer;