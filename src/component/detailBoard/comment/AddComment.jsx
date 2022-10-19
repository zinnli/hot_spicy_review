import React, { useState, useEffect } from "react";
import Btn from "../../btn/Btn";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import Fire from "../../fire/Fire";
import styled from "styled-components";
import { axiosHot } from "../../../apis/hotInstance";
import { addHot } from "../../../redux/modules/hotSlice";
import axios from "axios";

function AddComment(onDeleteHandler) {
  const id = nextId();
  const dispatch = useDispatch();
  const initialState = {
    id: 0,
    content: "",
    fire: "",
    isDone: false,
  };
  const [inputs, setInputs] = useState(initialState);
  const [comments, setComments] = useState(null);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const fetchAll = async () => {
    const { data } = await axiosHot.get("comments");
    setComments(data);
  };
  const onSubmitHandler = (inputs) => {
    axios.post("http://localhost:3001/comments", inputs);
    if (inputs.content === "") {
      alert("내용을 넣어주세요");
      return;
    }

    dispatch(
      addHot({
        ...inputs,
        id,
      })
    );
    setInputs("");
  };
  useEffect(() => [fetchAll()], []);

  console.log(comments);
  return (
    <STAddComment
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(inputs);
      }}
    >
      <form>
        <InputStyle
          type="text"
          name="content"
          key="id"
          value={inputs.content || ""}
          onChange={onChangeHandler}
        />
        <div>
          <Fire changeFire={onChangeHandler} />
          <Btn label="기록" onClick={() => {}} />
        </div>
      </form>
    </STAddComment>
  );
}

export default AddComment;

const STAddComment = styled.div`
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
