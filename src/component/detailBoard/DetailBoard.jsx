import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Btn from "../btn/Btn";
import { axiosHot } from "../../apis/hotInstance";
import { useParams } from "react-router-dom";
import { detailHot } from "../../redux/modules/hotSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  console.log({ id });
  const dispatch = useDispatch();
  const [posts, setPosts] = useState({
    id: "0",
    title: "",
    content: "",
    fire: "",
    img: "",
    isDone: false,
  });

  const fetchpost = async () => {
    const { data } = await axiosHot.get("posts");
    setPosts(...data, dispatch(detailHot(id)));
    console.log(data);
  };
  // const post = posts.find((post) => {
  //   return post.id;
  // });
  useEffect(() => {
    fetchpost();
  }, []);
  console.log(posts);
  // console.log(post);

  return (
    <STDetailBoard key={posts.id}>
      {/* <img
        src="https://pixabay.com/get/g0c69efb0c96d89bdefe09a3a95a65fb9d4f25604cb878f6a0de8b02fe9c2d889c129b43d076caf6bd8060edf286b85482bcde45fd0048e372a72243f359e19c40bd7b8737024890bc190fc10b1d6d55f_1920.jpg"
        alt="img"
      /> */}
      {/* {posts?.map((post) => {
        if (post.id === posts.id) { */}
      {/* return ( */}
      <div>
        <div className="detail-title">
          <p>{posts.title}</p>
          <p>{posts.fire}</p>
        </div>
        <div>{posts.img}</div>
        <p className="detail-text">{posts.content}</p>
        <STDetailBtn>
          <Btn
            label="삭제"
            className="btn detail-edit-btn"
            onClick={() => {}}
          />
          <Btn className="btn detail-del-btn" />
        </STDetailBtn>
      </div>
      {/* ); */}
      {/* }
      })} */}
    </STDetailBoard>
  );
}

export default Detail;

const STDetailBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 80%;
  padding: 15px;
  /* img {
    width: 80%;
    height: 300px;
    object-fit: cover;
  } */
  .detail-title {
    width: 80%;
    /* min-width: 400px; */
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
