import React from "react";
import Btn from "../../btn/Btn";
import { useDispatch } from "react-redux";
import { updateHot } from "../../../redux/modules/hotSlice";

function EditComment({ com }) {
  const dispatch = useDispatch();
  const onUpdateHandler = (id) => {
    dispatch(updateHot(id));
  };

  return (
    <div>
      <Btn
        label="수정"
        onUpdateHandler={onUpdateHandler}
        onClick={() => onUpdateHandler(com.id)}
      >
        {" "}
        {com.isDone ? "수정" : "완료"}
      </Btn>
    </div>
  );
}

export default EditComment;
