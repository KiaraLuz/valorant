import { useEffect, useState } from "react";

export default function Background() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setHeight(`${document.body.scrollHeight}px`);
      } else {
        setHeight("100vh");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="block z-0 absolute top-0 right-0 w-full bg-zinc-400 clip-diagonal-right"
      style={{ height }}
    ></div>
  );
}
