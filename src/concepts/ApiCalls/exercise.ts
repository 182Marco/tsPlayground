import axios from 'axios';
import { companyDetailsObjReq, objPrarmsArrayForCalls } from './calls';
import { IAxiosRes, IGetReqWithAxios } from './models';

const getResThenMethod: IGetReqWithAxios = options =>
  axios
    .request(options ? options : companyDetailsObjReq())
    .then((res: IAxiosRes) => res)
    .catch((er: string) => {
      console.error(er);
    });

const getResAwaitMethod: IGetReqWithAxios = async options => {
  try {
    return await axios.request(options ? options : companyDetailsObjReq());
  } catch (er: unknown) {
    return er;
  }
};

const callsParams = objPrarmsArrayForCalls.map(obj => getResAwaitMethod(obj));

const parallelCallsNoStop = () => Promise.allSettled(callsParams);

export { getResThenMethod, getResAwaitMethod, parallelCallsNoStop };
