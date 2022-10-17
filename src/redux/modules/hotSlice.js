import { createSlice } from "@reduxjs/toolkit";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

const initialState = {
  hot: [{ id: 1, content: "너무 매워여", fire: "🔥", isDone: false }],
  detail: [
    {
      id: 1,
      title: "떡볶이집",
      text: "죽을맛",
      fire: "🔥",
      img: "",
      isDone: false,
    },
  ],
};

const hotSlice = createSlice({
  name: "hot",
  initialState,
  reducers: {
    addHot: (state, action) => {
      // console.log(state.hot);
      console.log(action);
      return { ...state, hot: [...state.hot, action.payload] };
    },
    deleteHot: (state, action) => {
      state.hot = state.hot.filter((h) => h.id !== action.payload);
    },
    updateHot: (state, action) => {
      state.hot = state.hot.map((com) => {
        if (com.id === action.payload) {
          return {
            ...com,
            isDone: !com.isDone,
          };
        } else {
          return toBeInTheDocument;
        }
      });
    },
    addDetail: (state, action) => {
      // console.log(state.hot);
      console.log(action);
      return { ...state, detail: [...state.detail, action.payload] };
    },
  },
});

export const { addHot, deleteHot, updateHot, addDetail } = hotSlice.actions;
export default hotSlice.reducer;
