import { AxiosError, AxiosResponse } from "axios";

export interface ICharacter {
  id: number;
  name: string;
  status: STATUS;
  species: string;
  type: string;
  gender: GENDER;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum STATUS {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}
export enum GENDER {
  FEMALE = "Female",
  MALE = "Male",
  GENDERLESS = "Genderless",
  UNKNOWN = "unknown",
}
export interface Location {
  name: string;
  link: string;
}

export interface Filters {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface GetAll {
  signal: AbortSignal | undefined;
  page: number;
  filters: Filters | undefined;
}

export interface GetMultiple {
  signal: AbortSignal | undefined;
  id: number[];
}
export interface ResponseGetAllCharacter {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: number | null;
  };
  results: ICharacter[];
}

export interface ICharactersContext {
  data: AxiosResponse<ResponseGetAllCharacter> | undefined;
  error: AxiosError | null;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  page: number;
  setContextPage: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilters: (filters: Filters | undefined) => void;
  favorites: AxiosResponse<ICharacter[] | ICharacter> | undefined;
  handleFavorites: (id: number) => void;
  handleRemoveFavorite: (id: number) => void;
  loadingFavorites: boolean;
}
