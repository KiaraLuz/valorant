import { useState } from "react";
import { DescriptionSkills } from "./DescriptionSkills";
import { Ability } from "../interfaces/Ability";

export function Skills({ abilities }: { abilities: Ability[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!abilities || abilities.length === 0) {
    return <div>No abilities available</div>;
  }

  return (
    <>
      <div className="flex gap-4">
        {abilities.map((ability, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-20 aspect-square border-[1px] rounded-md cursor-pointer ${
              selectedIndex === index ? "bg-white/20" : "border-white"
            }`}
          >
            <img
              src={ability.displayIcon}
              alt={ability.displayName}
              className="p-3"
            />
          </div>
        ))}
      </div>
      <DescriptionSkills
        description={
          abilities[selectedIndex].description || "No description available"
        }
        title={abilities[selectedIndex].displayName || "No title available"}
      />
    </>
  );
}
