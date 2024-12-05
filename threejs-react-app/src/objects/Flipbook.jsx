import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip"; 
import backgroundImage from '../img/Desk_Background.png'; 
import frontPage from '../img/front_cover.png'; 
import backPage from '../img/back_cover.png'; 
import sideImageDefault from '../img/Contents_Sidebar_Minimized.png';
import sideImageHover from '../img/Contents_Sidebar_Expanded.png';
import header from '../img/Header_PeoplePlaces.png';
import page from '../img/PAGE.jpg';

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const flipBookRef = useRef(null);

  const chapters = [
    { 
      name: "Charles Crismon - I", 
      content: "Charles Crismon was a pioneer in the early settlement, contributing significantly to the foundation of this town. His work laid the groundwork for future developments and was pivotal in the growth of the community.", 
      birthYear: "1805", 
      deathYear: "1890" 
    },
    { 
      name: "Charles Crismon - II", 
      content: "In addition to his contributions to the town’s infrastructure, Crismon was known for his compassion and leadership. His legacy lives on through the many landmarks that bear his name." 
    },
    
    { 
      name: "Charles Robson - I", 
      content: "Known for his architectural innovations and community service, Charles Robson left a lasting legacy. He designed several iconic buildings that are still admired today." 
    },
    { 
      name: "Charles Robson - II", 
      content: "Robson’s work extended beyond architecture; he was deeply involved in social services, helping to establish several local institutions that continue to serve the community." 
    },
    
    { 
      name: "Daniel Webster Jones - I", 
      content: "Daniel Webster Jones was a writer and explorer who documented numerous stories from the frontier. His work provides a valuable insight into the life and challenges of early settlers." 
    },
    { 
      name: "Daniel Webster Jones - II", 
      content: "Jones’s writings are still studied by historians today. His accounts of interactions with Native American tribes and his explorations of unknown territories are particularly noteworthy." 
    },
  
    { 
      name: "John Doe - I", 
      content: "A mysterious figure with a series of unknown tales, John Doe's past is wrapped in speculation. He appeared in town with little explanation, leading to many rumors about his origin." 
    },
    { 
      name: "John Doe - II", 
      content: "Though details about his life remain obscure, Doe made contributions to local charity events and was known for his peculiar yet captivating storytelling abilities." 
    },
    
    { 
      name: "Jane Smith - I", 
      content: "Jane Smith led the women's rights movement in the region, advocating for equality and opportunity. Her speeches inspired many and sparked significant social changes." 
    },
    { 
      name: "Jane Smith - II", 
      content: "Beyond her activism, Smith organized educational programs for women and was instrumental in establishing the first local women's shelter." 
    },
  
    { 
      name: "Mary Johnson - I", 
      content: "As a teacher, Mary Johnson educated several generations, nurturing the minds of young learners. She was beloved by students and parents alike." 
    },
    { 
      name: "Mary Johnson - II", 
      content: "Johnson’s legacy includes a scholarship fund for aspiring educators, ensuring her influence continues to benefit the community even after her passing." 
    },
    
    { 
      name: "William Brown - I", 
      content: "William Brown, a farmer and community leader, contributed to local agriculture advancements. His methods improved crop yields and provided for many families." 
    },
    { 
      name: "William Brown - II", 
      content: "In addition to his work on the farm, Brown helped establish local co-ops, giving farmers better access to resources and markets." 
    },
    
    { 
      name: "James Taylor - I", 
      content: "James Taylor was known for his musical talents, often performing at local gatherings. His music brought joy and unity to the community." 
    },
    { 
      name: "James Taylor - II", 
      content: "Taylor’s compositions captured the spirit of the town, and his legacy lives on through the James Taylor Music Festival held annually in his honor." 
    },
    
    { 
      name: "Emily Wilson - I", 
      content: "Emily Wilson, a renowned artist, painted the landscapes and portraits of many early residents. Her work provides a visual record of the town's development." 
    },
    { 
      name: "Emily Wilson - II", 
      content: "Wilson's art continues to be celebrated, with her paintings displayed in the town museum, serving as an inspiration for aspiring artists." 
    },
    
    { 
      name: "Oliver Thompson - I", 
      content: "A local businessman, Oliver Thompson established several shops that supported the town's economy. His entrepreneurial spirit helped create jobs for many residents." 
    },
    { 
      name: "Oliver Thompson - II", 
      content: "Thompson also invested in community projects, funding parks and recreational areas that are still enjoyed by residents today." 
    },
  ];
  
  // Function to navigate to the second page (even-numbered) of each person's entry
  const goToPage = (chapterIndex) => {
    if (flipBookRef.current) {
      // Each chapter has two pages, so to link to the right page, we multiply the index by 2 and add 3
      const rightPageIndex = chapterIndex * 2 + 3;
      flipBookRef.current.pageFlip().flip(rightPageIndex);
    }
  };

  return (
    <div className="flex h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>

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

    <div 
      className={`absolute right-0 top-0 h-full transition-all duration-500 z-20 ${isHovered ? 'w-96' : 'w-32'} bg-no-repeat bg-cover cursor-pointer flex flex-col items-center py-8`}
      style={{ backgroundImage: `url(${isHovered ? sideImageHover : sideImageDefault})`, backgroundSize: 'cover' }}
      onClick={() => setIsHovered(!isHovered)}
    >
      {isHovered ? (
        <div className="flex flex-col items-start text-black mt-4 ml-16 animate-slide-in">
          <h3 className="font-extrabold mb-4 text-2xl">Navigate</h3>
          <ul className="text-xl list-none space-y-4">
            {chapters.filter((_, i) => i % 2 === 0).map((chapter, index) => (
              <li key={index} className="hover:underline cursor-pointer" onClick={() => goToPage(index)}>
                {chapter.name.split(" - ")[0]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-full text-black transform -rotate-90 ml-16">
          <span className="text-2xl font-extrabold tracking-widest">Contents</span>
        </div>
      )}
    </div>


      {/* Flipbook */}
      <div className="flex justify-center items-center flex-1">
        <HTMLFlipBook ref={flipBookRef} width={400} height={500} size="fixed" minWidth={800} maxWidth={1200} minHeight={1000} maxHeight={1400} maxShadowOpacity={0.5} flippingTime={1000} showCover={true} usePortrait={false} autoSize={true} onFlip={(e) => setCurrentPage(e.data)} style={{ marginTop: '4vh' }}>
          {/* Front Cover */}
          <div className="flex flex-col justify-center items-center p-8 text-white font-serif text-center relative">
            <img src={frontPage} alt="Front Cover" className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>

          {/* Left Page: Empty */}
          <div className="flex flex-col justify-center items-center p-8 bg-white"></div>

          {/* Right Page: Table of Contents */}
          <div className="flex flex-col justify-center items-center p-8 bg-yellow-200 border-2 border-yellow-600">
            <h2 className="text-4xl font-serif mb-6">Contents</h2>
            <ul className="text-lg list-none">
              {chapters.filter((_, i) => i % 2 === 0).map((chapter, index) => (
                <li key={index} className="mb-2 text-blue-600 cursor-pointer hover:underline" onClick={() => goToPage(index)}>
                  {chapter.name.split(" - ")[0]}
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Chapter Pages */}
          {chapters.map((chapter, index) => (
            <div key={index} className="flex flex-col justify-center items-center p-8 bg-yellow-200 border-2 border-yellow-600">
              <h2 className="text-3xl font-serif mb-4">{chapter.name}</h2>
              {chapter.birthYear && (
                <p className="text-lg italic mb-2">
                  {chapter.birthYear} - {chapter.deathYear}
                </p>
              )}
              <p className="text-base text-left mb-4">{chapter.content}</p>
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center mt-4">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="flex flex-col justify-center items-center p-8 bg-red-800 text-white font-serif text-center">
            <img src={backPage} alt="Back Cover" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Flipbook;
