"use client";
import { Movie } from "./lib/types";
import { baseImgUrl } from "./lib/constants";
import { useState } from "react";
import Modal from "./Modal";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className=" bg-gradient-to-b from-[#0E0C19] via-transparent hover:border  to-transparent relative h-24 min-w-48 sm:h-32 sm:min-w-60 md:h-36 md:min-w-72 cursor-pointer "
        onClick={openModal}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent "></div>

        <div>
          <p className="absolute text-purple-2  bottom-1 ml-2">
            {movie.title}
          </p>
        </div>
        <img
          src={
            movie?.backdrop_path || movie?.poster_path
              ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
              : "/assets/no-image.png"
          }
          className="object-cover w-full h-full "
          alt={movie?.title || movie?.name}
        />
      </div>

      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
