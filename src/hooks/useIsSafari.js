import { useEffect, useState } from "react";

const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
      setIsSafari(true);
    }
  }, []);

  return isSafari;
};

export default useIsSafari;
