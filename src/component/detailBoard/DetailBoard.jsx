import React, { useEffect } from "react";

import Btn from "../btn/Btn";
import styled from "styled-components";
import CommentList from "./comment/CommentList";
import { __deleteHot, __detailHot } from "../../redux/modules/hotSlice";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function DetailBoard() {
     const Hots = useSelector((state) => state.hot.detail);
     //detail 쓰는 이유
     const comments = useSelector((state) => state.comments.comments);

     const { isLoading, error } = useSelector((state) => state.hot);
     const { id } = useParams();
     const navigate = useNavigate();
     console.log(Hots);
     console.log(comments);
     const dispatch = useDispatch();

     const onDelHandler = () => {
          dispatch(__deleteHot(id));
          //console.log(Hots.id);
          navigate("/", { replace: true });
          // useNavigate - replace 사용하기-- 오류처리 페이지로 이동
          // isError : 오류 판별 (true 일 때 오류페이지로 이동)
     };

     useEffect(() => {
          dispatch(__detailHot(id));
     }, [dispatch, id]);

     const onEditHandler = () => {
          //dispatch(__editHot(id));
          navigate(`/hot/edit/${id}`);
          // window.location.replace("/");
     };

     if (isLoading) {
          return <div>로딩 중....</div>;
     }

     if (error) {
          return <div>{error.message}</div>;
     }

     return (
          <>
               <STDetailBoard>
                    <div className="detail-title">
                         <p>{Hots.title}</p>
                         <p>{Hots.fire}</p>
                    </div>
                    <p className="detail-text">{Hots.content}</p>
                    <STDetailBtn>
                         <Btn
                              label="수정"
                              className="btn detail-edit-btn"
                              onClick={onEditHandler}
                         />
                         <Btn
                              label="삭제"
                              className="btn detail-edit-btn"
                              onClick={onDelHandler}
                         />
                         {/* arrow fun 쓸 때 -- 사용법은 많은데.,,!!! 주로~!!! map돌릴때 */}
                    </STDetailBtn>
               </STDetailBoard>
               <CommentList postId={id} />
          </>
     );
}

export default DetailBoard;

const STDetailBoard = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     height: 60%;
     width: 80%;
     padding: 15px;
     .detail-title {
          width: 80%;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          p {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 25%;
               height: 40px;
               text-align: center;
               color: tomato;
               border: 3px solid tomato;
          }
          p:first-child {
               width: 70%;
          }
     }
     .detail-text {
          display: flex;
          justify-content: flex-start;
          width: 80%;
          min-height: 200px;
          height: auto;
          color: tomato;
          border: 3px solid tomato;
          font-size: 18px;
          padding: 20px;
          margin: 10px 0;
     }
`;

const STDetailBtn = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items: center;
     width: 80%;
     height: 60px;
     .btn {
          width: 500px;
          height: 100%;
     }
`;
