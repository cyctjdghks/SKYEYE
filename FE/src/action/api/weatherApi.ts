import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { urls }  from "@constant/values";

export interface ApiResult {
  isSuccess: boolean;
  result: any;
}

const WeatherAPI = axios.create({ baseURL: urls.WeatherAPI})

//오류가 발생할 경우
WeatherAPI.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    if (err.response.status === 401) {
      localStorage.clear();
      return Promise.reject(err);
    }
  },
);

/**
* GET HTTP 요청을 처리하는 API 유틸 함수
  @param url 요청을 전송할 Url
  @param config Axios 요청 관련 config(AxiosRequestConfig)
  @returns 요청 결과와 결과값 리턴
*/
export async function weatherGetAsync(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResult> {
  try {
    const response = await WeatherAPI.get(url, {
      responseType: "json",
      ...config,
    });
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: err };
  }
}