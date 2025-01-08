import { useState } from "react";

export function Skills() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`w-20 aspect-square border-[1px] rounded-md cursor-pointer ${
            selected === index ? "bg-white border-black" : "border-white"
          }`}
        ></div>
      ))}
    </div>
  );
}
