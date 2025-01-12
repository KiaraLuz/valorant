import { useState } from "react";
import { DescriptionSkills } from "./DescriptionSkills";
import { Ability } from "../interfaces/Ability";

export function Skills({ abilities }: { abilities: Ability[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  if (!abilities || abilities.length === 0) {
    return <div>No abilities available</div>;
  }

  const handleAbilityChange = (index: number) => {
    if (selectedIndex !== index) {
      setIsChanging(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setIsChanging(false);
      }, 300);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        {abilities.map((ability, index) => (
          <div
            key={index}
            onClick={() => handleAbilityChange(index)}
            className={`w-20 aspect-square rounded-md cursor-pointer transition-colors duration-500 hover:bg-red-500 hover:border-red-500  ${
              selectedIndex === index
                ? "bg-red-500 border-red-500"
                : "border-white border-[1px]"
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
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isChanging ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <DescriptionSkills
          description={
            abilities[selectedIndex].description || "No description available"
          }
          title={abilities[selectedIndex].displayName || "No title available"}
        />
      </div>
    </>
  );
}
