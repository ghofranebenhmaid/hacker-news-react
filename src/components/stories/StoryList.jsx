import React from "react";
import Author from "../author/Author";
import Story from "./Story";

const StoryList = (props) => {
  if (props.stories.length === 0) {
    return <p className="center">No stories found!!</p>;
  }
  return (
    <ul>
      {props.stories?.map((story) => (
        <Story
          key={story.title}
          title={story.title}
          score={story.score}
          url={story.url}
          by={story.by}
          time={story.time}
        />
      ))}
      {props.authors?.map((item) => (
        <Author key={item.id} id={item.id} karma={item.karma} />
      ))}
    </ul>
  );
};

export default StoryList;
