import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResult {
  isSuccess: boolean;
  result: any;
}

const uploadAPI = axios.create({ baseURL: "https://k8d202.p.ssafy.io/api" });

export let Error: AxiosError;

//오류가 발생할 경우
uploadAPI.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    Error = err;
  }
);

/**
  POST HTTP 요청을 처리하는 API 유틸 함수
  @param url 요청을 전송할 Url
  @param data body에 넣어 보낼 데이터
  @param config Axios 요청 관련 config(AxiosRequestConfig)
  @returns 요청 결과와 결과값 리턴
*/
export async function postAsync<D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<ApiResult> {
  try {
    const response = await uploadAPI.post(url, data, {
      responseType: "json",
      ...config,
    });
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: err };
  }
}
