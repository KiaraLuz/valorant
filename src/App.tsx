import { Agents } from "./components/Agents";
import { Navbar } from "./components/Navbar";
import { useFetchAgents } from "./hooks/useFetchAgents";

export default function App() {
  const { agents, loading } = useFetchAgents();

  if (loading) return <div>Loading...</div>;

  return (
    <main className="overflow-hidden sm:max-h-svh max-w-[1440px] relative mx-auto">
      <div className="sm:block hidden z-0 absolute top-0 right-0 w-full h-full bg-white clip-diagonal-right"></div>
      <Navbar />
      <Agents agents={agents} />
    </main>
  );
}
