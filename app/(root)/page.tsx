import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { fetchGenreMovies } from "../Components/lib/actions/movieData";
import CategoryList from "../Components/CategoryList";
import { Genre } from "../Components/lib/types";

const home = async () => {
  const genres = await fetchGenreMovies()
  // const example = genres.slice(0,2)
  // console.log(example)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="flex flex-col gap-8 mt-16 pl-10">
        {genres.map((genre:Genre) => (
          <CategoryList key={genre.id} title={genre.name} movies={genre.movies}/>
        ))}
      </div>
    </div>
  );
}

export default home