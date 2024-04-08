import MovieCard from "@app/Components/MovieCard";
import { searchMovies } from "@app/Components/lib/actions/movieData";
import { Movie } from "@app/Components/lib/types";

const SearchResults = async ({ query }: { query: string }) => {
  let searchedMovies: Movie[] = [];

  searchedMovies = await searchMovies(query);

  return searchedMovies.length === 0 ? (
    <div className="flex flex-col py-16 px-10">
      <h1 className="text.heading2-bold">No results found</h1>
    </div>
  ) : (
    <div className="flex flex-col py-16 px-10">
      <h1 className="text.heading2-bold">Results for "{query}"</h1>
      <div className="flex items-center justify-center gap-6 lg:gap-10 flex-wrap px-3 sm:px-6 md:px-10 py-20">
        {searchedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
