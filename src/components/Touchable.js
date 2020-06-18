import React, { useRef, useLayoutEffect, useEffect, useState } from "react";

export default ({ children, swipeRight, ...props }) => {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (touchStartX < touchEndX) {
      if (touchStartX < 15 && touchEndX > 100) {
        console.log("swipe");
        swipeRight();
      }
    }
  }, [touchStartX, touchEndX]);
  useLayoutEffect(() => {
    ref.current.addEventListener("touchstart", async e => {
      await setTouchEndX(null);
      setTouchStartX(e.changedTouches[0].clientX);
      console.log(e.changedTouches[0].clientX);
    });
    ref.current.addEventListener("touchend", e => {
      setTouchEndX(e.changedTouches[0].clientX);
      console.log(e.changedTouches[0].clientX);
    });
  }, [ref]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
