import React from "react";
import AddComment from "./AddComment";
import EditComment from "../editDetail/EditDetail";
import { useSelector } from "react-redux";

// import DeleteComment from "./DeleteComment";
// import EditComment from "./EditComment";
import styled from "styled-components";
// import { deleteHot } from "../../../redux/modules/hotSlice";
import DeleteComment from "./DeleteComment";

function CommentList({ onDeleteHandler }) {
  const hot = useSelector((state) => state.hot);
  console.log(hot);
  return (
    <STCommentList>
      <AddComment />
      <div className="comment-list">
        {hot.map((com) => {
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
    /* justify-content: space-between; */
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
