import React, { useState, useEffect } from "react";
import Btn from "../../btn/Btn";
import Fire from "../../fire/Fire";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __postCom,
  __editCom,
  __getCom,
} from "../../../redux/modules/commentSlice";

function AddComment({ postId, comment, fire }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const initialState = {
    id: 0,
    comment: "",
    fire: "",
    postId: postId,
  };
  const [comments, setComment] = useState(initialState);
  const [editC, setEditC] = useState(false);
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

  const onEditHandler = () => {
    dispatch(__editCom(id));
    //   setEditC(false);
    //   dispatch(__getCom(false));
    // };

    // useEffect(() => {
    //   setComment(comment, fire);
    // }, [comment, fire]);
    return (
      <STAddComment onSubmit={onSubmitInfoHandler}>
        <InputStyle
          type="text"
          name="comment"
          key="id"
          value={comments.comment}
          onChange={onChangeHandler}
        />
        <div>
          <Fire key="id" changeFire={onChangeHandler} />
          <Btn label="기록" onClick={() => {}} />
        </div>
      </STAddComment>
    );
  };
}

export default AddComment;

const STAddComment = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 80%;
  form {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    border: none;
    background-color: tomato;
    border-radius: 20px;
    padding: 5px 10px;
    margin-bottom: 20px;
    input {
      width: 60%;
      height: auto;
      margin-left: 10px;
    }
    div {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const InputStyle = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 2px solid red;
  margin-right: 20px;
`;
