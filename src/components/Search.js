import { useState } from "react";

const Search = (props) => {
  const [movie, setMovie] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(movie);
    setMovie("");
  };
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        className="search-input"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
    </form>
  );
};

export default Search;
