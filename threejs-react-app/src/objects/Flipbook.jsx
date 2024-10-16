import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip'; // Ensure this library is installed and imported

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // For the flipbook fade-in effect
  const [blackScreen, setBlackScreen] = useState(true); // For the initial black screen
  const flipBookRef = useRef(null);

  // Trigger fade-in effect when the flipbook loads
  useEffect(() => {
    setTimeout(() => {
      setBlackScreen(false); // Start removing the black screen
    }, 500); // Delay before fade-out of black screen starts

    setTimeout(() => {
      setFadeIn(true); // Trigger the fade-in of the flipbook
    }, 1500); // Slight delay after the black screen starts fading out
  }, []);

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
    <div className="relative w-full h-screen">
      {/* Initial black screen that fades out */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[1000ms] ease-out ${
          blackScreen ? 'opacity-100' : 'opacity-0'
        } z-50`}
      ></div>

      {/* Flipbook container with delayed fade-in */}
      <div
        className={`flex justify-center items-center h-screen p-4 transition-opacity duration-[2000ms] ease-in-out ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/bookbg.jpeg)',
          backgroundSize: 'cover',
          backgroundColor: 'black',
        }}
      >
        <div className="w-full h-full max-w-[90vw] max-h-[90vh]">
          <HTMLFlipBook
            ref={flipBookRef}
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
    </div>
  );
};

export default Flipbook;
