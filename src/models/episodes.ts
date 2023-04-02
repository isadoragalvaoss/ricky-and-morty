export interface IEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface GetMultiple {
  signal: AbortSignal | undefined;
  id: number[];
}
