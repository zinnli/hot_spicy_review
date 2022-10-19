import React, { useState, useParams } from "react";
import AddComment from "./AddComment";
import Btn from "../../btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../api/axiosInstance";
import { __deleteCom, __getCom } from "../../../redux/modules/commentSlice";

function CommentList({ postId }) {
     const dispatch = useDispatch();
     const comments = useSelector((state) => state.comments.comments);
     const { isLoading, error } = useSelector((state) => state.comments);

     useEffect(() => {
          dispatch(__getCom(postId));
     }, [dispatch, postId]);

     const onDelHandler = (id) => {
          dispatch(__deleteCom("comments", `${id}`));
          //     window.location.reload();
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
                         if (!com.isDone) {
                              return (
                                   <div key={com.id}>
                                        <div className="comment-text">
                                             <p>{com.comment}</p>
                                             <p>{com.fire}</p>
                                        </div>

                                        <div className="comment-btn">
                                             <Btn
                                                  label="삭제"
                                                  type="button"
                                                  onClick={() =>
                                                       onDelHandler(com.id)
                                                  }
                                             />
                                             <Btn
                                                  label="수정"
                                                  key={com.id}
                                                  com={com}
                                             />
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
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          border: 3px solid tomato;
          padding: 20px;
          gap: 20px;
          div {
               width: 100%;
               display: flex;
               justify-content: space-between;
               align-items: center;
          }
          .comment-text {
               width: 75%;
               height: auto;
               border: 2px solid tomato;
               border-radius: 5px;
               padding: 10px 15px;
               color: orangered;
               p:last-child {
                    width: 20%;
                    text-align: center;
               }
          }
          .comment-btn {
               width: 20%;
               height: auto;
               display: flex;
               justify-content: flex-end;
          }
     }
`;
