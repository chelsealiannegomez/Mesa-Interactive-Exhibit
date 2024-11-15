import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip"; 
import backgroundImage from '../img/Desk_Background.png'; 
import frontPage from '../img/front_cover.png'; 
import backPage from '../img/back_cover.png'; 

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flipBookRef = useRef(null);

  const chapters = [
    {
      name: "Charles Crismon",
      content: "Charles Crismon content here...",
      birthYear: "1805",
      deathYear: "1890",
    },
    {
      name: "Charles Robson",
      content: "Charles Robson content here...",
    },
    {
      name: "Daniel Webster Jones",
      content: "Daniel Webster Jones content here...",
    },
    {
      name: "John Doe",
      content: "John Doe content here...",
    },
    {
      name: "Jane Smith",
      content: "Jane Smith content here...",
    },
    {
      name: "Mary Johnson",
      content: "Mary Johnson content here...",
    },
    {
      name: "William Brown",
      content: "William Brown content here...",
    },
    {
      name: "James Taylor",
      content: "James Taylor content here...",
    },
    {
      name: "Emily Wilson",
      content: "Emily Wilson content here...",
    },
    {
      name: "Oliver Thompson",
      content: "Oliver Thompson content here...",
    },
  ];

  const goToPage = (pageIndex) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageIndex + 2);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full max-w-[90vw] max-h-[90vh]">
        <HTMLFlipBook
          ref={flipBookRef}
          width={350}
          height={500}
          size="fixed"
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
          style={{ marginLeft: '0px' , marginTop:'50px'}}
        >
          {/* Front Cover */}
          <div className="flex flex-col justify-center items-center p-8 text-white font-serif text-center relative">
            <img
              src={frontPage}
              alt="Front Cover"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          {/* Left Page: Empty */}
          <div className="flex flex-col justify-center items-center p-8 bg-white"></div>

          {/* Right Page: Table of Contents */}
          <div className="flex flex-col justify-center items-center p-8 bg-yellow-200 border-2 border-yellow-600">
            <h2 className="text-4xl font-serif mb-6">Contents</h2>
            <ul className="text-lg list-none">
              {chapters.map((chapter, index) => (
                <li
                  key={index}
                  className="mb-2 text-blue-600 cursor-pointer hover:underline"
                  onClick={() => goToPage(index)}
                >
                  {index + 1}. {chapter.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Chapter Pages */}
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-8 bg-[url('/page.png') bg-yellow-200 border-2 border-yellow-600"
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
          <img
              src={backPage}
              alt="Front Cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Flipbook;

