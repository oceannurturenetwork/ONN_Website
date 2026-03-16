
import { useState, useEffect } from "react";

function useWindowLoaded() {
  const [windowLoaded, setWindowLoaded] = useState<boolean>(false);

  useEffect(() => {
    const onLoad = () => setWindowLoaded(true);

    if (document.readyState === "complete") {
      // If the document is already loaded, set the state immediately
      setWindowLoaded(true);
    } else {
      // Otherwise, wait for the window to finish loading
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return windowLoaded;
}

export default useWindowLoaded;
