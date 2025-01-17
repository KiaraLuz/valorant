import { useState } from "react";
import { Skills } from "./Skills";
import { Agent } from "../interfaces/Agent";
import SwiperAgents from "./SwiperAgents";

interface Props {
  agents: Agent[];
}

export function Agents({ agents }: Props) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(agents[0]);
  const [isChanging, setIsChanging] = useState(false);

  const handleAgentChange = (agentId: string) => {
    if (selectedAgent?.uuid !== agentId) {
      setIsChanging(true);
      setTimeout(() => {
        const newAgent = agents.find((agent) => agent.uuid === agentId);
        setSelectedAgent(newAgent || null);
        setIsChanging(false);
      }, 300);
    }
  };

  if (agents.length === 0 && !selectedAgent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative max-w-[1440px] grid-rows-2 grid-cols-1 grid sm:grid-cols-2 sm:grid-rows-1 px-4 sm:px-20 py-5 sm:h-svh gap-4 mx-auto">
      <div
        className={`transition-all absolute sm:top-[100px] sm:left-[80px] top-[80px] left-[15px] text-transparent font-extrabold uppercase font-tungsten text-[clamp(4.5rem,15vw,9.5rem)] ${
          isChanging ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
        style={{
          WebkitTextStroke: "0.5px gray",
        }}
      >
        {selectedAgent?.displayName || "Agent Name"}
      </div>

      <div
        className={`sm:block hidden transition-all absolute left-[-10px] bottom-[200px] -rotate-90 ${
          isChanging ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
        style={{
          height: "100px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="text-transparent font-extrabold uppercase font-tungsten text-7xl"
          style={{
            WebkitTextStroke: "0.2px gray",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {selectedAgent?.role?.displayName || "Role"}
        </div>
      </div>

      <div
        className={`flex flex-col max-w-xl gap-8 transition-all duration-300 ease-in-out transform ${
          isChanging ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <h1 className="font-extrabold text-transparent uppercase leading-none text-[clamp(4.5rem,15vw,9.5rem)] bg-gradient-to-b from-white/50 to-white bg-clip-text font-tungsten">
          {selectedAgent?.displayName || "Agent Name"}
        </h1>
        <p className="font-light">
          {selectedAgent?.description || "Agent description not available."}
        </p>
        <Skills abilities={selectedAgent?.abilities || []} />
      </div>
      <div className="relative flex-1 h-5/6">
        <SwiperAgents
          agents={agents}
          onAgentChange={handleAgentChange}
          selectedAgentId={selectedAgent?.uuid ?? null}
        />
      </div>
    </div>
  );
}
