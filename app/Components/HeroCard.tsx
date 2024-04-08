"use client";
import React, { useState } from "react";
import { Movie } from "./lib/types";
import { baseImgUrl } from "./lib/constants";
import { InfoOutlined, PlayCircleOutline } from "@mui/icons-material";
import Modal from "./Modal";
import { motion } from "framer-motion";

const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // console.log(trendingMovie);
  return (
    <>
      <div className="flex flex-col px-10 mt-[140px] gap-10 max-w-[700px]">
        <div className="bg-gradient-to-b from-[#141123] via-transparent to-transparent w-full absolute top-0 left-0 -z-10 h-screen w-screen">
          <img
            src={`${baseImgUrl}${
              trendingMovie?.backdrop_path || trendingMovie?.poster_path
            }`}
            alt="trending-movie"
            className="object-cover w-full h-full w-full;"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent "></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent "></div>
        </div>
        <div>
          <div>
            <motion.h1 className="text-heading1-bold text-[#fff] text-[70px] mb-14" 
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2, type: "spring"}}>
              {trendingMovie?.title || trendingMovie?.name}
            </motion.h1>
            <motion.p className="font-light text-[#ccc] mb-9" 
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:3, type: "spring"}}>
              {trendingMovie?.overview}
            </motion.p>
          </div>

          <motion.div className="flex gap-6" 
                  initial={{y:"2rem", opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{duration:4, type: "spring"}}>
            <button
              className="flex text-[#141123] items-center justify-center gap-1 px-4 py-3 text-[14px] transition-all duration-500 hover:scale-105 hover:shadow-lg rounded-xl cursor-pointer bg-[#fff]"
              onClick={openModal}
            >
              <PlayCircleOutline />
              Play Now
            </button>
            <button
              className="flex text-[#fff] hover:text-[#fff] items-center justify-center bg-purple-1 bg-opacity-70  gap-1 px-4 py-3 rounded-xl text-[14px] transition-all duration-500 hover:scale-105 hover:shadow-lg  cursor-pointer"
              onClick={openModal}
            >
              <InfoOutlined />
              More Info
            </button>
          </motion.div>
        </div>
      </div>
      {showModal && <Modal movie={trendingMovie} closeModal={closeModal}/>}
    </>
  );
};

export default HeroCard;
