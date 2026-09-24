import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-0 flex flex-col justify-center bg-gradient-to-r from-black via-black/80 to-transparent px-6 text-white md:px-16">
      <h1 className="mb-4 max-w-2xl text-4xl font-extrabold drop-shadow-lg md:text-6xl">
        {title}
      </h1>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-lg">
        {overview}
      </p>
      <div className="flex gap-3">
        <button className="rounded bg-white px-6 py-2 font-semibold text-black transition hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="rounded bg-gray-500/70 px-6 py-2 font-semibold transition hover:bg-gray-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
