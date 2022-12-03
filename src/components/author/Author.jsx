import React from "react";
import "./author.scss";
import userImage from "../../assets/user.png";
const Author = (props) => {
  return (
    <div className="container">
      <div className="author ">
        <div>
          <img src={userImage} alt={props.id} />
          <p className="author__name"> Name: {props.id}</p>
          <p className="author__karma"> karma score: {props.karma} points</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
