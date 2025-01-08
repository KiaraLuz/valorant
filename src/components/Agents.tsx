import { DescriptionSkills } from "./DescriptionSkills";
import { Skills } from "./Skills";

export function Agents() {
  return (
    <div className="flex px-16 py-5">
      <div className="max-w-xl flex flex-col gap-8">
        <div className="text-7xl font-extrabold bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent">
          KILLJOY
        </div>

        <div className="font-light">
          The genius of Germany. Killjoy secures the battlefield with ease using
          her arsenal of inventions. If the damage from her gear doesn't stop
          her enemies, her robots' debuff will help make short work of them.
        </div>
        <Skills />
        <DescriptionSkills />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
