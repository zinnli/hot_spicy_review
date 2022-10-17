import React from "react";
import Btn from "../../btn/Btn";
import { useDispatch } from "react-redux";
import { deleteHot } from "../../../redux/modules/hotSlice";

function DeleteComment({ com }) {
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteHot(id));
  };

  return (
    <div>
      <Btn
        label="삭제"
        onDeleteHandler={onDeleteHandler}
        onClick={() => onDeleteHandler(com.id)}
      />
    </div>
  );
}

export default DeleteComment;
