import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.07,
};

let scrollbar;
const Scroll = () => {
  useEffect(() => {
    if (document) {
      scrollbar = Scrollbar.init(document && document.body, options);
    }

    // Cleanup işlemi
    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return <></>;
};

export default Scroll;
