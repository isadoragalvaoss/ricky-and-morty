import {
  getAllCharacters,
  getMultipleCharacter,
} from "@/api/services/character";
import { CharacterContext } from "@/context/CharacterContext/CharacterContext";
import {
  Filters,
  ICharacter,
  ResponseGetAllCharacter,
} from "@/models/character";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export const CharacterProvider = ({ children }: any): JSX.Element => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters | undefined>();
  const [ids, setIds] = useState<number[]>([]);

  const handleFilters = (filters: Filters | undefined) => {
    setFilters(filters ?? undefined);
    setPage(1);
  };
  const setContextPage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const { data, error, isLoading, isError, isFetching } = useQuery<
    AxiosResponse<ResponseGetAllCharacter>,
    AxiosError
  >(["characters", page, filters], ({ signal }) =>
    getAllCharacters({ signal, page, filters })
  );

  const { data: favorites, isLoading: loadingFavorites } = useQuery<
    AxiosResponse<ICharacter[] | ICharacter>,
    AxiosError
  >(["favoriteCharacters", ids.length > 0 ? ids : []], ({ signal }) =>
    getMultipleCharacter({ signal, id: ids })
  );

  const handleFavorites = (id: number) => {
    setIds([...ids, id]);
  };

  const handleRemoveFavorite = (id: number) => {
    setIds(ids.filter((favoriteId) => favoriteId !== id));
  };

  const contextValue = {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    page,
    setContextPage,
    handleFilters,
    favorites,
    handleFavorites,
    handleRemoveFavorite,
    loadingFavorites,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
