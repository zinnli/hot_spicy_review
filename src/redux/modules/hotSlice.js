import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPocket } from "../../apis/pocketInstance";
import axios from "axios";

const initialState = {
  hot: [{ id: 1, content: "너무 매워여", fire: "🔥", isDone: false }],
  hots: { id: "0", title: "", content: "", fire: "", img: "", isDone: false },
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
export const __getHot = createAsyncThunk(
  "hot/getHot",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get();
    } catch (error) {}
  }
);

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
          return;
        }
      });
    },
    detailHot: (state, action) => {
      state.hots = state.hot.find((hots) => {
        return hots.id == action.payload;
      });
    },
    addDetail: (state, action) => {
      // console.log(state.hot);
      console.log(action);
      return { ...state, detail: [...state.detail, action.payload] };
    },
  },
});

export const { addHot, deleteHot, updateHot, detailHot, addDetail } =
  hotSlice.actions;
export default hotSlice.reducer;
