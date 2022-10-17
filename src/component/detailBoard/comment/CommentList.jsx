import React from "react";
import AddComment from "./AddComment";
import Btn from "../../btn/Btn";

// import DeleteComment from "./DeleteComment";
// import EditComment from "./EditComment";
import styled from "styled-components";

function CommentList() {
     return (
          <STCommentList>
               <AddComment />
               <div className="comment-list">
                    <div className="comment-text">
                         <p>댓글</p>
                         <p>평점</p>
                    </div>
                    <div className="comment-btn">
                         <Btn />
                         <Btn />
                    </div>
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
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          border: 3px solid tomato;
          padding: 5px 10px;
          div {
               width: 30%;
               display: flex;
               justify-content: space-between;
               align-items: center;
          }
          .comment-text {
               width: 65%;
               height: auto;
          }
     }
`;
