import { Query } from "mongoose"
import { getApiResponse } from "../requests"

// fetching hero movies
export const fetchTrending = async () => {
  const data = await getApiResponse("/trending/movie/week")
  const trending = data.results

  return trending
}


// fetching genres
export const fetchGenreMovies = async () => {
  const data = await getApiResponse("/genre/movie/list")
  const genres = data.genres

  for (const genre of genres) {
    const data = await getApiResponse(`/discover/movie?with_genres=${genre.id}`)
    // Add movies array to genre object --> For examples: genre = { id: 28, name: 'Action', movies: [ ... ]},
    genre.movies = data.results
  }
  console.log(genres)
  return genres
}

export const searchMovies = async (query: string) => {
  const data = await getApiResponse(`/search/movie?query=${query}`)
  const searchMovies = data.results
  console.log(searchMovies)
  return searchMovies
}






