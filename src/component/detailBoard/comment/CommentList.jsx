import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import Btn from "../../btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  __deleteCom,
  __getCom,
  __editCom,
} from "../../../redux/modules/commentSlice";

function CommentList({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const { isLoading, error } = useSelector((state) => state.comments);

  const initialState = {
    id: 0,
    comment: "",
    fire: "",
    postId: 0,
    isDone: false,
  };

  const [comM, setComment] = useState(initialState);
  const [editC, setEditC] = useState(false);
  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getCom(postId));
  }, [dispatch, postId]);

  const onDelHandler = (id) => {
    dispatch(__deleteCom(id));
    // navigate("/", { replace: true });
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <STCommentList>
      <AddComment postId={postId} />
      <div className="comment-list">
        {comments?.map((com) => {
          return (
            <div key={com.id}>
              <div className="comment-text">
                <p key={com.id} comment={com.comment}>
                  {com.comment}
                </p>
                <p key={com.id} fire={com.fire}>
                  {com.fire}
                </p>
              </div>

              <div className="comment-btn">
                <Btn
                  label="삭제"
                  type="button"
                  onClick={() => onDelHandler(com.id)}
                />
                <Btn label="수정" onClick={() => {}} />
              </div>
            </div>
          );
        })}
      </div>
    </STCommentList>
  );
}

export default CommentList;

const STCommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 80%;
  padding: 30px;
  .comment-list {
    width: 80%;
    height: 300px;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    flex-direction: column;
    font-size: 15px;
    border: 3px solid tomato;
    padding: 5px 10px;
    div {
      width: 100%;
      background-color: lightgray;
      margin-bottom: 5px;
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
    }
    .comment-text {
      width: 1700px;
      height: auto;
    }
  }
`;
