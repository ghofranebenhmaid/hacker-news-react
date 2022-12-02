export const baseUrl = "https://hacker-news.firebaseio.com/v0";

export const fetchTopStoriesIds = async () => {
  const response = await fetch(`${baseUrl}/topstories.json`);
  const topStoriesIds = await response.json();

  return topStoriesIds;
};

export const fetchStory = async (id) => {
  const response = await fetch(`${baseUrl}/item/${id}.json`);
  const storyData = await response.json();
  //  console.log(storyData);

  const story = {
    id: storyData.id,
    by: storyData.by,
    title: storyData.title,
    url: storyData.url,
    score: storyData.score,
    time: storyData.time,
  };
  return story;
};
export const fetchAuthor = async (id) => {
  const response = await fetch(`${baseUrl}/user/${id}.json`);
  const authorData = await response.json();
  //   console.log(storyData);

  const author = {
    id: authorData.id,
    about: authorData.about,
    karma: authorData.karma,
  };
  return author;
};

export const fetchStories = async (ids) => {
  const stories = await Promise.all(ids.map(fetchStory));

  return stories;
};
