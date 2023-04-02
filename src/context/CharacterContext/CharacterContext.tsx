import { ICharactersContext } from "@/models/character";
import { createContext, useContext } from "react";

export const CharacterContext = createContext<ICharactersContext | undefined>(
  undefined
);

export const useCharacterContext = (): ICharactersContext => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useDataContext deve ser usado dentro do provedor de contexto"
    );
  }
  return context;
};

export default { CharacterContext, useCharacterContext };
