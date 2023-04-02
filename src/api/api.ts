import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IRequest {
  url: string;
  config?: AxiosRequestConfig;
  body?: unknown;
}

export const axiosInstance = axios.create();

const api = {
  get: ({ url, config }: IRequest): Promise<AxiosResponse> =>
    axiosInstance.get(url, config),
};

export default api;
