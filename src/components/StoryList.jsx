import React from "react";
import Story from "./Story";

const StoryList = (props) => {
  return (
    <ul>
      {props.stories.map((story) => (
        <Story key={story.title} title={story.title} />
      ))}
    </ul>
  );
};

export default StoryList;
