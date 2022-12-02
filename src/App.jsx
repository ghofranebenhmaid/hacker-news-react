import StoryList from "./components/StoryList";
function App() {
  const dummyData = [{ title: "story 1" }, { title: "story 2" }];
  return (
    <main className="App">
      <StoryList stories={dummyData} />
    </main>
  );
}

export default App;
