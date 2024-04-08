"use client";
import { useEffect, useState } from "react";
import { Genre, Movie, Video } from "./lib/types";
import { AddCircle, CancelRounded } from "@mui/icons-material";

interface Props {
  movie: Movie;
  closeModal: () => void;
}

const Modal = ({ movie, closeModal }: Props) => {
  const [video, setVideo] = useState("");
  const [genres, setGenres] =useState<Genre[]>([]);
  // console.log("movie", movie )

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };

  const getMovieDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`,
        options
      );
      const data = await res.json();
      // console.log("movie details:",data)
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (video: Video) => video.type === "Trailer"
          //   [clip, clip, trailer, trailer]
        );
        
        setVideo(data.videos.results[index].key);
        // setVideo(data.videos.results[index].key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
      
    } catch (err) {
      // console.log("error fetching details", err);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, [movie]);

  return (
    <div className="fixed inset-0 z-30 bg-purple-1 bg-opacity-95 w-full max-w-2xl mx-auto overflow-hidden overflow-y-scroll scrollbar-hide rounded-2xl">
      <button>
        <CancelRounded
          className="absolute right-1 top-[20px] text-purple-2 transition-all duration-400 w-[22px] z-40"
          onClick={closeModal}
          sx={{
            color: "white",
            fontSize: "35px",
            ":hover": { color: "#fff" },
          }}
        />
      </button>
      {/* video modal & movies details */}
      <iframe
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
        className="top-0 left-0 w-full h-3/5"
        loading="lazy"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="text-base-bold">name:</p>
            <p className="text-base-light text-[#ccc]">{movie.title || movie.name}</p>
          </div>
          <div className="flex gap-3">
            <p className="text-base-bold">Add to list</p>
            <AddCircle className="cursor-pointer text-purple-2"/>
          </div>
        </div>
        <div className="flex gap-2 ">
          <p className="text-base-bold ">Release Date:</p>
          <p className="text-base-light text-[#ccc]">{movie?.release_date}</p>
        </div>

        <p className="text-base-light">{movie?.overview}</p>

        <div className="flex gap-2">
          <p className="text-base-bold">Rating:</p>
          <p className="text-base-light text-green">{movie?.vote_average}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-base-bold">Genres:</p>
          <p className="text-base-light">
            {genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
