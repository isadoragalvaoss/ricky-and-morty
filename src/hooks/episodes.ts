import { getMultipleEpisodes } from "@/api/services/episodes";
import { IEpisodes } from "@/models/episodes";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

interface UseEpisodesProps {
  initialIds: number[];
}

export const useEpisodes = ({ initialIds }: UseEpisodesProps) => {
  const { data, isLoading } = useQuery<AxiosResponse<IEpisodes[]>, AxiosError>(
    ["episodes", initialIds],
    ({ signal }) => getMultipleEpisodes({ signal, id: initialIds })
  );

  return { data, isLoading };
};

export default useEpisodes;
