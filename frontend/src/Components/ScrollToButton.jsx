import React, { useEffect, useState } from "react";

const ScrollToButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   }; 
  }, []);

  const handleScroll = ()=> {
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
  }

  return (
    <>
      <div className=" fixed bottom-4 right-6 font-extrabold text-emerald-500">
        {visible && (
          <button onClick={handleScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToButton;
