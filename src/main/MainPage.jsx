import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosHot } from "../../apis/hotInstance";
import { Link } from "react-router-dom";
// import { axiosPocket } from "../../apis/pocketInstance";

const MainPage = () => {
  // const [post, setPost] = useState({
  //   id: 0,
  //   title: "",
  //   fire: "",
  //   img: "readURL",
  // });
  const [posts, setPosts] = useState(null);
  // axiosPocket.get();
  // console.log(axiosPocket.get().then((item) => console.log(item)));
  const navigate = useNavigate();

  const fetchAll = async () => {
    const { data } = await axiosHot.get("posts");
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  console.log(posts);
  return (
    <div>
      <WriteButton onClick={() => navigate("hotform")}>
        게시물 작성하기
      </WriteButton>
      <ListContainer>
        {posts?.map((post) => (
          <ListCardBox key={post.id}>
            <ListCardImage>
              <Link to={`hot/${post.id}`} key={post.id}>
                {post.img}
              </Link>
            </ListCardImage>
            <ListCardFire>{post.fire}</ListCardFire>
            <ListCardTitle>{post.title}</ListCardTitle>
          </ListCardBox>
        ))}
      </ListContainer>
    </div>
  );
};

export default MainPage;
const ListContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: row;
`;

const ListCardBox = styled.div`
  width: 380px;
  height: 420px;
  /* margin-right: auto;
  margin-left: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightsalmon;
`;

const ListCardImage = styled.div`
  width: 350px;
  height: 300px;
  border: 2px solid violet;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCardFire = styled.div`
  width: 200px;
  height: 30px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCardTitle = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: 3px solid salmon;
  margin-left: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
