import { Agents } from './components/Agents';
import { Navbar } from './components/Navbar';
import { useState, useEffect } from 'react';

export default function App() {
  //fetch agents
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        setAgents(data.data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <main className='overflow-hidden max-h-svh'>
      <Navbar />
      <Agents agents={agents} />
    </main>
  );
}
