import React, { useState } from "react";
import TurnPage from "react-turn-page";

export const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chapters = [
    { name: "Person 1", content: "Person 1 content" },
    { name: "Person 2", content: "Person 2 content" },
    { name: "Person 3", content: "Person 3 content" },
    { name: "Person 4", content: "Person 4 content" },
  ];

  const handleChapterClick = (pageIndex) => {
    setCurrentPage(pageIndex + 1); // Jump to the respective page (index + 1 due to the Table of Contents being the first page)
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-yellow-500">
      <TurnPage
        className="flipbook w-[1000px] h-[600px]"
        page={currentPage}
        onFlip={setCurrentPage}
      >
        {/* Hard Cover (Front) */}
        <div className="hard bg-red-600 text-white font-bold flex items-center justify-center p-4 shadow-lg">
          People of Mesa
        </div>

        {/* Table of Contents */}
        <div className="page flex flex-col justify-center items-center bg-white p-4 border shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Table of Contents</h1>
          <ul className="text-gray-500 text-sm">
            {chapters.map((chapter, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline"
                onClick={() => handleChapterClick(index)}
              >
                Chapter {index + 1}: {chapter.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Chapter Pages */}
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="page flex flex-col justify-center items-center bg-white p-4 border shadow-lg"
          >
            <h2 className="text-xl font-bold">{chapter.name}</h2>
            <p className="text-gray-500 text-sm">{chapter.content}</p>
          </div>
        ))}

        {/* Hard Cover (Back) */}
        <div className="hard bg-red-600 text-white font-bold flex items-center justify-center p-4 shadow-lg">
          Thank You
        </div>
      </TurnPage>
    </div>
  );
};
