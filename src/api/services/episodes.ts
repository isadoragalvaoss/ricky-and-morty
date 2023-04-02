import { GetMultiple } from "@/models/episodes";
import { AxiosResponse } from "axios";
import { ENDPOINT_EPISODES } from "../../consts/endpoints";
import api from "../api";

export const getMultipleEpisodes = async ({
  id,
  signal,
}: GetMultiple): Promise<AxiosResponse> =>
  api.get({
    url: `${ENDPOINT_EPISODES}/${id}`,
    config: {
      params: {
        signal,
      },
    },
  });
