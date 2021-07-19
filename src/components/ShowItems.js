import Spineer from "./Spineer";
const ShowItem = ({ shows, isLoading }) => {
  return isLoading ? (
    <Spineer />
  ) : shows.length > 0 ? (
    shows.map((show) => (
      <div className="show-container" key={show.id}>
        <img
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/original${show.poster_path}`
              : "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          }
          alt={show.title}
        />
        <div className="show-details">
          {show.title && (
            <span>
              Title: <strong>{show.title}</strong>
            </span>
          )}
          {show.name && (
            <span>
              Title: <strong>{show.name}</strong>
            </span>
          )}
          <span>
            Original Language: <strong>{show.original_language}</strong>
          </span>
          <span>
            Popularity: <strong>{show.popularity}</strong>
          </span>
          <span>
            Vote Average: <strong>{show.vote_average}</strong>
          </span>
        </div>
      </div>
    ))
  ) : (
    <h1>There isn't a movie with that title </h1>
  );
};

export default ShowItem;
