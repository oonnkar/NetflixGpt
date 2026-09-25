import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-0 flex flex-col justify-end bg-gradient-to-r from-black via-black/80 to-transparent px-5 pb-20 text-white sm:justify-center sm:px-8 sm:pb-0 md:px-16">
      <h1 className="mb-3 max-w-2xl text-3xl font-extrabold leading-tight drop-shadow-lg sm:mb-4 sm:text-4xl md:text-6xl">
        {title}
      </h1>
      <p className="mb-5 line-clamp-3 max-w-xl text-xs leading-relaxed text-gray-200 sm:mb-6 sm:text-sm md:text-lg">
        {overview}
      </p>
      <div className="flex gap-2 sm:gap-3">
        <button className="rounded bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-300 sm:px-6 sm:text-base">
          ▶ Play
        </button>
        <button className="rounded bg-gray-500/70 px-4 py-2 text-sm font-semibold transition hover:bg-gray-500 sm:px-6 sm:text-base">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
