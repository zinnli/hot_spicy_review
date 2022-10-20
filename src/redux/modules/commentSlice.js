import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"; // 비동기 처리 ==> export 따로 빼서 작업(action 생성자 따로 호출)
import { axiosInstance } from "../../api/axiosInstance";

const initialState = {
  comments: [
    {
      id: 0,
      comment: "",
      fire: "🔥",
      postId: 0,
      isDone: false,
    },
  ],
  //   detail: { id: 0, title: "", content: "", fire: "🔥" },
  //   // hot 배열안의 객체가 각각의 입력값이 도출되므로
  isLoading: false,
  error: null,
};

export const __getCom = createAsyncThunk(
  "comments/getCom",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axiosInstance.get("/comments");
      const filterCom = data.filter((state) => state.postId === payload);
      console.log(data); // 이구문에서 오류나면 error로 넘어감
      console.log(filterCom);
      return thunkAPI.fulfillWithValue(filterCom);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __detailCom = createAsyncThunk(
  "comments/detailCom",
  async (payload, thunkAPI) => {
    //async 함수 맨앞 /await비동기처리되는구문
    try {
      const { data } = await axiosInstance.get(`/comments/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCom = createAsyncThunk(
  "comments/postCom",
  async (payload, thunkAPI) => {
    console.log("확인");
    try {
      console.log(payload);
      const { data } = await axiosInstance.post("/comments", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteCom = createAsyncThunk(
  "comments/deleteCom",
  async (payload, thunkAPI) => {
    try {
      console.log("확인", payload);
      const { data } = await axiosInstance.delete(`/comments/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editCom = createAsyncThunk(
  "comments/editCom",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(`/comments/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // 미들웨어
    //get
    [__getCom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getCom.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 hot에 서버에서 가져온 hot을 넣습니다.
    },
    [__getCom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //post
    [__postCom.pending]: (state) => {
      state.isLoading = true;
    },
    [__postCom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload); // state.hot에 가져온 hot들 추가하기
    },
    [__postCom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //getdetail
    [__detailCom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__detailCom.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.detail = action.payload; // Store에 있는 hot에 서버에서 가져온 hot을 넣습니다.
    },
    [__detailCom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //delete : 삭제 원리.. 메인페이지 getCom을 새로 가져감?
    [__deleteCom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteCom.fulfilled]: (state, action) => {
      state.isLoading = false;
      // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.comments = action.payload; // Store에 있는 hot에 서버에서 가져온 hot을 넣습니다.
    },
    [__deleteCom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      //삭제 이후이기때문에 payload가 아님
    },
    [__editCom.pending]: (state) => {
      state.isLoading = true;
    },
    [__editCom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments].map((item) => {
        if (action.payload.id === item.id) {
          return action.payload;
        }
        return item;
      });
    },
    [__editCom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
