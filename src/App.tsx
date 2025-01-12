import { Agents } from "./components/Agents";
import { Navbar } from "./components/Navbar";
import { useFetchAgents } from "./hooks/useFetchAgents";

export default function App() {
  const { agents, loading } = useFetchAgents();

  if (loading) return <div>Loading...</div>;

  return (
    <main className="overflow-hidden max-h-svh">
      <Navbar />
      <Agents agents={agents} />
    </main>
  );
}
