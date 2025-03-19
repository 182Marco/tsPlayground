import { AxiosRequestConfig, AxiosResponse } from 'axios';

type IAxiosRes = AxiosResponse<Record<string, any>>;
type IGetReqWithAxios = (options?: AxiosRequestConfig<any>) => Promise<any>;

export { IAxiosRes, IGetReqWithAxios };
