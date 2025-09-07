


import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.outerWidth);

    // ✅ add event listener
    window.addEventListener("resize", handleResize);

    // ✅ cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;

