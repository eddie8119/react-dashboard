import { AxiosResponse } from 'axios';
import request from "../utils/request";

//取得廠商列表
export const getFirmLists = async ():Promise<AxiosResponse> => { 
  return await request.get<FirmObject[]>(`/firmLists`);
};

