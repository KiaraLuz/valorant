import { Ability } from "./Ability";
import { Role } from "./Roles";

export interface Agent {
  abilities: Ability[];
  assetPath: string;
  background: string;
  backgroundGradientColors: string[];
  bustPortrait: string;
  characterTags: null;
  description: string;
  developerName: string;
  displayIcon: string;
  displayName: string;
  fullPortrait: string;
  killfeedPortrait: string;
  role: Role;
  uuid: string;
}
