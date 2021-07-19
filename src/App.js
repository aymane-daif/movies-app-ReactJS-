import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import ShowItems from "./components/ShowItems";

function App() {
  const [shows, setShows] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=69efa1e8e904dd3121eb932e01fd2bc2"
      );
      //   console.log(request.data.results);
      setShows(request.data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const getSearchedShows = (q) => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/search/movie?&api_key=69efa1e8e904dd3121eb932e01fd2bc2&query=" +
          q
      );
      console.log(request.data.results);
      setShows(request.data.results);
      setIsLoading(false);
    }
    fetchData();
  };

  return (
    <div className="container">
      <Search handleSubmit={getSearchedShows} />
      <div className="Trending-shows">
        <ShowItems shows={shows} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
