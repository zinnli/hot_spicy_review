import React, { useState, useEffect } from "react";
import { axiosHot } from "../../../apis/hotInstance";
import AddComment from "./AddComment";
import EditComment from "../editDetail/EditDetail";
import styled from "styled-components";
import DeleteComment from "./DeleteComment";

function CommentList() {
  const [comments, setComments] = useState(null);
  const fetchAll = async () => {
    const { data } = await axiosHot.get("comments");
    setComments(data);
  };

  useEffect(() => [fetchAll()], []);
  return (
    <STCommentList>
      <AddComment />
      <div className="comment-list">
        {comments?.map((com) => {
          if (!com.isDone) {
            return (
              <div key={com.id}>
                <div className="comment-text">
                  <p>{com.content}</p>
                  <p>{com.fire}</p>
                </div>

                <div className="comment-btn">
                  <DeleteComment key={com.id} com={com} />
                  <EditComment key={com.id} com={com} />
                </div>
              </div>
            );
          } else {
            return null;
          }
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
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 15px;
    border: 3px solid tomato;
    padding: 5px 10px;
    div {
      background-color: lightgray;
      width: auto;
      margin: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .comment-text {
      width: 65%;
      height: auto;
      margin-left: 10px;
    }
  }
`;
