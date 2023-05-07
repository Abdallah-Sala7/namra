import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  betData:[],
  activeTap: "tab1",
  chooseScorer: "",
}

export const betSlice = createSlice({
  name :'betModal',
  initialState,
  reducers:{
    setActiveTap:(state, action) => {
      state.activeTap = action.payload;
    },

    setChooseScorer:(state, action) => {
      state.chooseScorer = action.payload;
    },

    setBetData:(state, action) => {
      state.betData = action.payload;
    }
  }
})

export const {setActiveTap, setChooseScorer, setBetData} = betSlice.actions;
export default betSlice.reducer;