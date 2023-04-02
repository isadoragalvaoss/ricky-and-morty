import { GetAll, GetMultiple } from "@/models/character";
import { AxiosResponse } from "axios";
import { ENDPOINT_CHARACTERS } from "../../consts/endpoints";
import api from "../api";

export const getAllCharacters = async ({
  signal,
  page,
  filters,
}: GetAll): Promise<AxiosResponse> =>
  api.get({
    url: `${ENDPOINT_CHARACTERS}`,
    config: {
      params: {
        signal,
        page,
        ...(filters?.name && { name: filters.name }),
        ...(filters?.status && { status: filters.status }),
        ...(filters?.species && { species: filters.species }),
        ...(filters?.type && { type: filters.type }),
        ...(filters?.gender && { gender: filters.gender }),
      },
    },
  });

export const getMultipleCharacter = async ({
  id,
  signal,
}: GetMultiple): Promise<AxiosResponse> =>
  api.get({
    url: `${ENDPOINT_CHARACTERS}/${id}`,
    config: {
      params: {
        signal,
      },
    },
  });
