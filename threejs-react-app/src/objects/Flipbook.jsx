import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip"; 
import backgroundImage from '../img/Desk_Background.png'; 
import frontPage from '../img/front_cover.png'; 
import backPage from '../img/back_cover.png'; 
import sideImageDefault from '../img/Contents_Sidebar_Minimized.png';
import sideImageHover from '../img/Contents_Sidebar_Expanded.png';
import header from '../img/Header_PeoplePlaces.png';

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const flipBookRef = useRef(null);

  const chapters = [
    { name: "Charles Crismon", content: "Charles Crismon content here...", birthYear: "1805", deathYear: "1890" },
    { name: "Charles Robson", content: "Charles Robson content here..." },
    { name: "Daniel Webster Jones", content: "Daniel Webster Jones content here..." },
    { name: "John Doe", content: "John Doe content here..." },
    { name: "Jane Smith", content: "Jane Smith content here..." },
    { name: "Mary Johnson", content: "Mary Johnson content here..." },
    { name: "William Brown", content: "William Brown content here..." },
    { name: "James Taylor", content: "James Taylor content here..." },
    { name: "Emily Wilson", content: "Emily Wilson content here..." },
    { name: "Oliver Thompson", content: "Oliver Thompson content here..." },
  ];

  const goToPage = (pageIndex) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageIndex + 2); // +2 to account for cover and contents pages
    }
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

<div 
        className="absolute top-0 left-0" 
        style={{
          width: '600px', 
          height: '130px',
        }}
      >
        {/* Background Image */}
        <img
          src={header}
          alt="Page Header"
          style={{
            width: '600px', 
            height: '130px', 
            objectFit: 'cover',
          }}
        />
        <h1
          className="absolute"
          style={{
            top: '30%', 
            left: '40%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          People&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Places
        </h1>
      </div>
      
      {/* Flipbook */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-full h-full max-w-[80vw] max-h-[90vh] ml-[-2vw]"> {/* Slight shift left */}
          <HTMLFlipBook
            ref={flipBookRef}
            width={550} // increased width for larger view
            height={700} // increased height for larger view
            size="fixed"
            minWidth={800}
            maxWidth={1200}
            minHeight={1000}
            maxHeight={1400}
            maxShadowOpacity={0.5}
            flippingTime={1000}
            showCover={true}
            usePortrait={false}
            autoSize={true}
            onFlip={(e) => setCurrentPage(e.data)}
            style={{ marginTop: '2vh' }}
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
              <img
                src={backPage}
                alt="Back Cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </HTMLFlipBook>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 h-full transition-all duration-500 ${
          isHovered ? 'w-96' : 'w-32'
        } bg-no-repeat bg-cover cursor-pointer flex flex-col items-center py-8`}
        style={{
          backgroundImage: `url(${isHovered ? sideImageHover : sideImageDefault})`,
          backgroundSize: 'cover',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vertical "Contents" Text for Default State */}
        {!isHovered && (
          <div className="flex flex-col justify-center h-full text-black transform -rotate-90 ml-16">
            <span className="text-2xl font-extrabold tracking-widest">Contents</span>
          </div>
        )}

        {/* Sidebar Navigation Links - Slide-in Animation */}
        {isHovered && (
          <div className="flex flex-col items-start text-black mt-4 ml-16 animate-slide-in">
            <h3 className="font-extrabold mb-4 text-2xl">Navigate</h3>
            <ul className="text-xl list-none space-y-4">
              {chapters.map((chapter, index) => (
                <li
                  key={index}
                  className="hover:underline cursor-pointer"
                  onClick={() => goToPage(index)}
                >
                  {chapter.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flipbook;
