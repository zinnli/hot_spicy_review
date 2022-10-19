import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // 비동기 처리 ==> export 따로 빼서 작업(action 생성자 따로 호출)
import { axiosInstance } from "../../api/axiosInstance";

const initialState = {
     hot: [],
     detail: { id: 0, title: "", content: "", fire: "🔥" },
     // hot 배열안의 객체가 각각의 입력값이 도출되므로
     isLoading: false,
     error: null,
};

export const __getHot = createAsyncThunk(
     "hot/getHot",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.get("/hot"); // 이구문에서 오류나면 error로 넘어감
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

export const __detailHot = createAsyncThunk(
     "hot/detailHot",
     async (payload, thunkAPI) => {
          //async 함수 맨앞 /await비동기처리되는구문
          try {
               const { data } = await axiosInstance.get(`/hot/${payload}`);
               console.log(data);
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

export const __postHot = createAsyncThunk(
     "hot/postHot",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.post("/hot", payload);
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

export const __deleteHot = createAsyncThunk(
     "hot/deleteHot",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.delete(`/hot/${payload}`);
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);
export const __editHot = createAsyncThunk(
     "hot/editHot",
     async (id, payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.patch(
                    `/hot/${id}`,
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const hotSlice = createSlice({
     name: "hot",
     initialState,
     reducers: {},
     extraReducers: {
          // state값을 따로 변경x --> 원래있는 값 그대로 들어감
          // 미들웨어
          //get
          [__getHot.pending]: (state) => {
               state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [__getHot.fulfilled]: (state, action) => {
               state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
               state.hot = action.payload; // Store에 있는 hot에 서버에서 가져온 hot을 넣습니다.
          },
          [__getHot.rejected]: (state, action) => {
               state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
               state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
          //post
          [__postHot.pending]: (state) => {
               state.isLoading = true;
          },
          [__postHot.fulfilled]: (state, action) => {
               state.isLoading = false;
               state.hot.push(action.payload); // state.hot에 가져온 hot들 추가하기
          },
          [__postHot.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
          //getdetail
          [__detailHot.pending]: (state) => {
               state.isLoading = true;
          },
          [__detailHot.fulfilled]: (state, action) => {
               state.isLoading = false;
               state.detail = action.payload;
          },
          [__detailHot.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
          //delete // ,, 삭제된 원리 : 메인페이지 gethot을 새로 가져감
          [__deleteHot.pending]: (state) => {
               state.isLoading = true;
          },
          [__deleteHot.fulfilled]: (state, action) => {
               state.isLoading = false;
          },
          [__deleteHot.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
               // 삭제 이후이기때문에 payload가 아님
          },
          //edit
          [__editHot.pending]: (state) => {
               state.isLoading = true;
          },
          [__editHot.fulfilled]: (state, action) => {
               state.isLoading = false;
               state.hot = action.payload;
          },
          [__editHot.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export const {} = hotSlice.actions;
export default hotSlice.reducer;
