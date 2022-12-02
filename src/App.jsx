import { useEffect, useState } from "react";
import StoryList from "./components/StoryList";

import { fetchStories, fetchTopStoriesIds } from "./utils";

const getRandom = (arr, count) => {
  let _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
};

function App() {
  const [stories, setStories] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStories = async () => {
    setLoading(true);
    const topStoriesIdsData = await fetchTopStoriesIds();
    setTopStoriesIds(topStoriesIdsData);
    const storiesData = await fetchStories(topStoriesIdsData);
    const randomStory = getRandom(storiesData, 10);
    const sorted = randomStory.sort((a, b) => +a.score - +b.score);
    console.log(sorted.by);
    setStories(sorted);
    setLoading(false);
  };

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <main className="App">
      {loading && <p className="center">Loading...</p>}
      {!loading && <StoryList stories={stories} />}
    </main>
  );
}

export default App;
