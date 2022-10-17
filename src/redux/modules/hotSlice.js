import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
     {
          id: 0,
          restaurant: "현진마라탕",
          fire: "별네개지롱",
          info: "양도 많고 혜자예요 사장님 멋져요",
     },
];

const hotSlice = createSlice({
     name: "hot",
     initialState,
     reducers: {
          addHot: (state, action) => {
               console.log(current(state));
               return [...state, action.payload];
          },
     },
});

export const { addHot } = hotSlice.actions;
export default hotSlice.reducer;
