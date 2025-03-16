import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { companyDetailsObjReq } from './calls';

const getNewsWithThen = (options?: AxiosRequestConfig<any>) =>
  axios
    .request(options ? options : companyDetailsObjReq())
    .then((res: AxiosResponse<Record<string, object[]>>) => {
      console.log(res.data);
    })
    .catch((er: string) => {
      console.error(er);
    });

const getNewsWithAwait = async (options?: AxiosRequestConfig<any>) => {
  try {
    const res: AxiosResponse<Record<string, object[]>> = await axios.request(
      options ? options : companyDetailsObjReq(),
    );
    console.log(`res: `, res.data);
  } catch (er: unknown) {
    console.error(er);
  }
};
