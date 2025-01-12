import { useState } from 'react';
import { Skills } from './Skills';
import { Agent } from '../interfaces/Agent';
import SwiperAgents from './SwiperAgents';

interface Props {
  agents: Agent[];
}

export function Agents({ agents }: Props) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(agents[0]);
  const [isChanging, setIsChanging] = useState(false);

  const handleAgentChange = (agentId: string) => {
    if (selectedAgent?.uuid !== agentId) {
      setIsChanging(true); // Inicia la animación
      setTimeout(() => {
        const newAgent = agents.find((agent) => agent.uuid === agentId);
        setSelectedAgent(newAgent || null);
        setIsChanging(false); // Finaliza la animación después del cambio
      }, 300); // Duración de la animación sincronizada con CSS
    }
  };

  if (agents.length === 0 && !selectedAgent) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-2 px-16 py-5 h-svh'>
      <div
        className={`flex flex-col max-w-xl gap-8 transition-all duration-300 ease-in-out transform ${
          isChanging ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <h1 className='font-extrabold text-transparent uppercase text-7xl bg-gradient-to-b from-white/50 to-white bg-clip-text font-tungsten'>
          {selectedAgent?.displayName || 'Agent Name'}
        </h1>
        <p className='font-light'>
          {selectedAgent?.description || 'Agent description not available.'}
        </p>
        <Skills abilities={selectedAgent?.abilities || []} />
      </div>
      <div className='relative flex-1 h-5/6'>
        <SwiperAgents
          agents={agents}
          onAgentChange={handleAgentChange}
          selectedAgentId={selectedAgent?.uuid ?? null}
        />
      </div>
    </div>
  );
}
