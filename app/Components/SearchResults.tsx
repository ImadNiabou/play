import { searchMovies } from "../Components/lib/actions/movieData";
import { Movie } from "../Components/lib/types";
import MovieCard from "./MovieCard";

const SearchResults = async ({ query }: { query: string }) => {
  let searchedMovies: Movie[] = [];

  searchedMovies = await searchMovies(query);

  return searchedMovies.length === 0 ? (
    <div className="flex flex-col py-16 px-10  ">
      <h1 className="text-heading2-bold text-[24px] mb-3 text-purple-2 ml-20">
        No results found
      </h1>
      <div className="flex gap-4">
      <p className="ml-20">There Are No Coincidences white</p>
      <p>"{query}"</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col py-16 px-10 ">
      <div className="flex gap-4">
        <h1 className="text-heading2-semibold text-purple-2 text-[24px] ml-20">
          Results for
        </h1>
        <h2 className="text-heading2-semibold text-[24px]">"{query}"</h2>
      </div>
      <div className="flex items-center justify-center gap-6 lg:gap-10 flex-wrap px-3 sm:px-6 md:px-10 py-20 ">
        {searchedMovies.map((movie) => (
          <div className="shadow-xl text-[14px] hover:bg-purple-2 text-purple-2 rounded-md transition-all duration-400">
            <MovieCard key={movie.id} movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
