import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // 비동기 처리 ==> export 따로 빼서 작업(action 생성자 따로 호출)

const initialState = {
     hot: [],
     isLoading: false,
     error: null,
};

export const __getHot = createAsyncThunk(
     "hot/getHot",
     async (payload, thunkAPI) => {
          try {
               const data = await axios.get("http://localhost:3001/hot");
               return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

export const __postHot = createAsyncThunk(
     "hot/postHot",
     async (payload, thunkAPI) => {
          try {
               const data = await axios.post(
                    "http://localhost:3001/hot",
                    payload
               );
               return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const hotSlice = createSlice({
     name: "hot",
     initialState,
     reducers: {
          addHot: (state, action) => {
               //console.log(current(state.hots));
               return { ...state, hot: [...state.hot, action.payload] };
          },
     },
     extraReducers: {
          [__getHot.pending]: (state) => {
               state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [__getHot.fulfilled]: (state, action) => {
               state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
               state.hot = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
          },
          [__getHot.rejected]: (state, action) => {
               state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
               state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
          [__postHot.pending]: (state) => {
               state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [__postHot.fulfilled]: (state, action) => {
               state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
               state.hot.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
          },
          [__postHot.rejected]: (state, action) => {
               state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
               state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
     },
});

export const { addHot } = hotSlice.actions;
export default hotSlice.reducer;
