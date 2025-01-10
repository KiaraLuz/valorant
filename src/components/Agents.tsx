import { useEffect, useState } from "react";
import { Skills } from "./Skills";
import { Agent } from "../interfaces/Agent";

interface Props {
  agents: Agent[];
}

export function Agents({ agents }: Props) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  useEffect(() => {
    if (agents.length > 0 && !selectedAgent) {
      setSelectedAgent(agents[0]);
    }
  }, [agents, selectedAgent]);

  if (agents.length == 0 && !selectedAgent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 px-16 py-5">
      <div className="flex flex-col max-w-xl gap-8">
        <h1 className="font-extrabold text-transparent uppercase text-7xl bg-gradient-to-b from-white/50 to-white bg-clip-text font-tungsten">
          {selectedAgent?.displayName || "Agent Name"}
        </h1>
        <p className="font-light">
          {selectedAgent?.description || "Agent description not available."}
        </p>
        <Skills abilities={selectedAgent?.abilities || []} />
      </div>
      <div className="relative flex-1">
        <img
          src={selectedAgent?.background}
          alt={selectedAgent?.background}
          className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        />
        <img
          src={selectedAgent?.fullPortrait}
          alt={selectedAgent?.displayName}
          className="z-10"
        />
      </div>
      <div className="flex w-full gap-4">
        <button
          className="w-full btn btn--light"
          onClick={() => {
            setSelectedAgent((selectedAgent) =>
              selectedAgent === agents[0]
                ? agents[agents.length - 1]
                : selectedAgent !== null
                ? agents[agents.indexOf(selectedAgent) - 1]
                : agents[0]
            );
          }}
        >
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">Previus</span>
          </span>
        </button>
        <button
          className="w-full btn btn--light"
          onClick={() => {
            setSelectedAgent((selectedAgent) =>
              selectedAgent === agents[agents.length - 1]
                ? agents[0]
                : selectedAgent !== null
                ? agents[agents.indexOf(selectedAgent) + 1]
                : agents[0]
            );
          }}
        >
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
