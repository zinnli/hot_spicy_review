import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   inputs: [
  //     { id: 1, title: "이가게", content: "여기 맵다", fire: "🔥", isDone: false },
  //   ],

  comments: [{ id: 1, content: "너무 매워여", isDone: false }],
};

const commentSlice = createSlice({
  name: "Comment", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    // 이 모듈의 Reducer 로직
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addComment } = commentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentSlice.reducer;
