import { useEffect, useState } from "react";

const FooterTimer = () => {
  const [currentTIme, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const updateCounter = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span class="ml-2 text-sm text-white flex gap-4">
      <span>{new Date().toLocaleDateString()}</span>
      {currentTIme}
    </span>
  );
};

export default FooterTimer;
