import { useState, useEffect, useCallback } from "react";

export default function VisiblyScroll() {
  const [showTopButton, setShowTopButton] = useState(false);
  const treshold = 300; // Podesi treshold unutar komponente

  function GoToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const ShowVisibleButton = useCallback(() => {
    console.log("Scroll Y:", window.scrollY); // Proveri vrednost scrollY
    if (window.scrollY > treshold) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  }, [treshold]);

  useEffect(() => {
    console.log("Initial Scroll Y:", window.scrollY); // Prvi ispis scrollY
    window.addEventListener("scroll", ShowVisibleButton);
    
    return () => {
      console.log("Event listener removed");
      window.removeEventListener("scroll", ShowVisibleButton);
    };
  }, [ShowVisibleButton]); // Zavisi od ShowVisibleButton

  return { showTopButton, GoToTop };
}
