import { Movie } from "./lib/types"
import  MovieCard  from '../Components/MovieCard'
import { motion } from "framer-motion"

interface Props {
    title: string,
    movies: Movie[]
}

const CategoryList = ({ title, movies, }:Props) => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-[#fff] text-[20px]">{title}</h1>
        <div className="flex gap-2 overflow-x-scroll scrollbar-hide ">
          
          {movies.map((movie) => (
            <div className="shadow-xl text-[14px] hover:bg-purple-2 text-purple-2 rounded-md transition-all duration-400">
              <MovieCard key={movie.id} movie={movie}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default CategoryList