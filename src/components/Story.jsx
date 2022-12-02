import React from "react";
import "./story.scss";
const Story = (props) => {

  const time = new Date(+props.time * 1000).toLocaleString("dk-DK");
  return (
    <div className="cart">
      <span className="cart__date"> {time} </span>
      <h3 className="cart__title">
        <a
          className="cursor-pointer text-3xl"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {props.title}
        </a>
      </h3>
      <span className="cart__score">{props.score} points</span>
      <span className="cart__author">
        {" "}
        by{" "}
        <a
          className="cursor-pointer text-3xl"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          {props.by}
        </a>{" "}
      </span>
    </div>
  );
};

export default Story;
