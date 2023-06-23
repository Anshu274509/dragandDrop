import React from "react";
import { GrFormAdd  } from "react-icons/gr";
import { BsThreeDots  } from "react-icons/bs";
import { BiCommentDots  } from "react-icons/bi";
import {LuFolderMinus} from "react-icons/lu"

import "./todo.scss";

const Todo = (props) => {
  return (
    <div className="todo">
      {/* <div className="board_title">
        <span>{prpos.title}</span>
        <p>
          <GrFormAdd />
        </p>
      </div> */}
      <div className="card">
        <span className="status">{props.status}</span>
        <BsThreeDots/>

        <h1 className="upper">
          {props.title}
        </h1>

          <p className="middle">
            {props.detail}
          </p>
          <div className="lower">
            <img src="" alt="" />
            <BiCommentDots/><p>comment</p>
            <LuFolderMinus/><p>files</p>

          </div>
      </div>
    </div>
  );
};

export default Todo;
