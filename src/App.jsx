import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useCallback, useEffect, useState } from "react";
import StoryList from "./components/stories/StoryList";

import {
  getRandom,
  fetchAuthors,
  fetchStories,
  fetchTopStoriesIds,
} from "./utils";
import AuthorPage from "./pages/AuthorPage";

function App() {
  const [stories, setStories] = useState([]);
  const [name, setName] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStories = useCallback(async () => {
    setLoading(true);
    const topStoriesIdsData = await fetchTopStoriesIds();
    setTopStoriesIds(topStoriesIdsData);
    const storiesData = await fetchStories(topStoriesIdsData);
    const randomStory = getRandom(storiesData, 10);

    const sorted = randomStory.sort((a, b) => +a.score - +b.score);

    const authors = sorted.map((item) => item.by);
    const by = await fetchAuthors(authors);

    setName(by);
    // console.log(name);
    setStories(sorted);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  return (
    <main className="App">
      {loading && <p className="center">Loading...</p>}
      {!loading && <StoryList stories={stories} />}
    </main>
  );
}

export default App;
