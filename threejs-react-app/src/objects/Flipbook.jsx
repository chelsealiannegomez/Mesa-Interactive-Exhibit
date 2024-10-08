import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip"; // Make sure this is correctly installed and imported

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chapters = [
    {
      name: "Charles Crismon",
      content: "Charles Crismon content here...",
      birthYear: "1805",
      deathYear: "1890",
    },
    { name: "Charles Robson", content: "Charles Robson content here..." },
    {
      name: "Daniel Webster Jones",
      content: "Daniel Webster Jones content here...",
    },
    // Add more chapters as needed...
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 p-4">
      {/* Add padding for edges */}
      <div className="w-full h-full max-w-[90vw] max-h-[90vh]">
        {/* Dynamically adjust width and height */}
        <HTMLFlipBook
          width={600}
          height={700}
          size="stretch"
          minWidth={400}
          maxWidth={1000}
          minHeight={500}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          flippingTime={1000}
          showCover={true}
          usePortrait={false}
          autoSize={true}
          onFlip={(e) => setCurrentPage(e.data)}
        >
          {/* Front Cover */}
          <div className="flex flex-col justify-center items-center p-8 bg-red-800 text-white font-serif text-center">
            <h1 className="text-5xl font-bold">People of Mesa</h1>
            <p className="text-2xl mt-4">A Historical Archive</p>
          </div>

          {/* Table of Contents */}
          <div className="flex flex-col justify-center items-center p-8 bg-yellow-200 border-2 border-yellow-600">
            <h2 className="text-4xl font-serif mb-6">Contents</h2>
            <ul className="text-lg list-none">
              {chapters.map((chapter, index) => (
                <li key={index} className="mb-2">
                  {index + 1}. {chapter.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Chapter Pages */}
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-8 bg-yellow-200 border-2 border-yellow-600"
            >
              <h2 className="text-3xl font-serif mb-4">{chapter.name}</h2>
              {chapter.birthYear && (
                <p className="text-lg italic mb-6">
                  {chapter.birthYear} - {chapter.deathYear}
                </p>
              )}
              <p className="text-base text-left">{chapter.content}</p>
            </div>
          ))}

          {/* Back Cover */}
          <div className="flex flex-col justify-center items-center p-8 bg-red-800 text-white font-serif text-center">
            <h1 className="text-5xl font-bold">Thank You</h1>
            <p className="text-2xl mt-4">for reading!</p>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Flipbook;
