import { useState, useEffect } from "react";
import { Agent } from "../interfaces/Agent";

export function useFetchAgents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        let agents = data.data.map((agent: Agent) => ({
          ...agent,
          abilities: agent.abilities.filter(
            (ability) => ability.slot !== "Passive"
          ),
        }));
        setAgents(agents.filter((agent: Agent) => agent.fullPortrait !== null));
      } catch (err) {
        console.error("Error fetching agents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return { agents, loading };
}
