import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Author from "../components/author/Author";
import {
  getRandom,
  fetchAuthors,
  fetchStories,
  fetchTopStoriesIds,
} from "../utils";

const AuthorPage = (props) => {
  const params = useParams();

  const [stories, setStories] = useState([]);
  const [name, setName] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStories = useCallback(async () => {
    setLoading(true);
    const topStoriesIdsData = await fetchTopStoriesIds();
    setTopStoriesIds(topStoriesIdsData);
    const storiesData = await fetchStories(topStoriesIdsData);
    // const randomStory = getRandom(storiesData, 10);

    // const sorted = randomStory.sort((a, b) => +a.score - +b.score);

    const authors = storiesData.map((item) => item.by);
    const by = await fetchAuthors(authors);
    console.log(by);
    setName(by);
    setStories(storiesData);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  const author = name.find((author) => author.id === params.id);

  //   if (!author) {
  //     return <p>no data!</p>;
  //   }
  return (
    <>
      {loading && <p className="center">Loading...</p>}
      {!loading && (
        <Author id={author.id} karma={author.karma} about={author.about} />
      )}
    </>
  );
};

export default AuthorPage;
