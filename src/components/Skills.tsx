import { useState } from 'react';
import { DescriptionSkills } from './DescriptionSkills';
import { Ability } from '../interfaces/Ability';

export function Skills({ abilities }: { abilities: Ability[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  if (!abilities || abilities.length === 0) {
    return <div>No abilities available</div>;
  }

  const handleAbilityChange = (index: number) => {
    if (selectedIndex !== index) {
      setIsChanging(true); // Activa la animación
      setTimeout(() => {
        setSelectedIndex(index);
        setIsChanging(false); // Desactiva la animación después de un breve tiempo
      }, 300); // Duración sincronizada con la animación CSS
    }
  };

  return (
    <>
      <div className='flex gap-4'>
        {abilities.map((ability, index) => (
          <div
            key={index}
            onClick={() => handleAbilityChange(index)}
            className={`w-20 aspect-square border-[1px] rounded-md cursor-pointer ${
              selectedIndex === index ? 'bg-white/20' : 'border-white'
            }`}
          >
            <img
              src={ability.displayIcon}
              alt={ability.displayName}
              className='p-3'
            />
          </div>
        ))}
      </div>
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isChanging ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <DescriptionSkills
          description={
            abilities[selectedIndex].description || 'No description available'
          }
          title={abilities[selectedIndex].displayName || 'No title available'}
        />
      </div>
    </>
  );
}
