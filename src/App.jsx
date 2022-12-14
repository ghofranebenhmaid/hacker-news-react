import { useCallback, useEffect, useState } from "react";
import StoryList from "./components/stories/StoryList";

import { getRandom, fetchStories, fetchTopStoriesIds } from "./utils";

function App() {
  const [stories, setStories] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStories = useCallback(async () => {
    setLoading(true);
    const topStoriesIdsData = await fetchTopStoriesIds();
    setTopStoriesIds(topStoriesIdsData);
    const storiesData = await fetchStories(topStoriesIdsData);
    const randomStory = getRandom(storiesData, 10);

    const sorted = randomStory.sort((a, b) => +a.score - +b.score);

    setStories(sorted);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  // useEffect(() => {
  //   const fetchStories = async () => {
  //     const response = await fetch(
  //       "https://hacker-news.firebaseio.com/v0/topstories.json"
  //     );
  //     const storyIds = await response.json();
  //     const randomStoryIds = storyIds
  //       .sort(() => 0.5 - Math.random())
  //       .slice(0, 10);

  //     const promises = randomStoryIds.map((id) =>
  //       fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  //     );

  //     const results = await Promise.all(promises);
  //     const stories = await Promise.all(results.map((res) => res.json()));
  //     console.log(stories);
  //     setStories(stories);
  //   };

  //   fetchStories();
  // }, []);

  return (
    <main className="App">
      {loading && <p className="center">Loading...</p>}
      {!loading && <StoryList stories={stories} />}

      {/* <StoryList stories={stories} /> */}
    </main>
  );
}

export default App;
