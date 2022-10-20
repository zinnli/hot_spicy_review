import React, { useState } from "react";
import Btn from "../../btn/Btn";
import Fire from "../../fire/Fire";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __postCom } from "../../../redux/modules/commentSlice";

function AddComment({ postId }) {
  const dispatch = useDispatch();
  const initialState = {
    id: 0,
    comment: "",
    fire: "",
    postId: postId,
  };
  const [comments, setComment] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment({ ...comments, [name]: value });
  };

  const onSubmitInfoHandler = (e) => {
    e.preventDefault();
    if (comments.comment === "") {
      alert("내용을 넣어주세요");
      return;
    }
    dispatch(__postCom({ ...comments }));
    setComment(initialState);
    return;
  };
  return (
    <STAddComment onSubmit={onSubmitInfoHandler}>
      <InputStyle
        className="input-text"
        type="text"
        name="comment"
        key="id"
        value={comments.comment}
        onChange={onChangeHandler}
      />
      <Fire changeFire={onChangeHandler} />

      <Btn label="기록" onClick={() => {}} />
    </STAddComment>
  );
}

export default AddComment;

const STAddComment = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 80%;
  margin: 15px 0;
  border-radius: 5px;
  background-color: tomato;
  padding: 15px 10px;
  gap: 10px;
  input {
    width: 65%;
    height: 40px;
    border: none;
    color: tomato;
  }
  .input-text:focus {
    border: 2px solid red;
  }
  div {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const InputStyle = styled.input`
  width: 55%;
  height: 35px;
  border-radius: 5px;
  border: 2px solid red;
  margin: 0 10px;
  padding: 5px;
`;
