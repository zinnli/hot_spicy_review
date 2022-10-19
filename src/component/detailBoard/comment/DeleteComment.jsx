import React from "react";
import Btn from "../../btn/Btn";
import axios from "axios";

function DeleteComment({ com }) {
  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3001/comments/${id}`);
  };

  return (
    <div>
      <Btn label="삭제" type="button" onClick={() => onDeleteHandler(com.id)} />
    </div>
  );
}

export default DeleteComment;
