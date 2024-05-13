import { AxiosResponse } from 'axios';
import request from "../utils/request";

//取得廠商列表
export const getFirmLists = async ():Promise<AxiosResponse> => { 
  return await request.get<FirmObject[]>(`/firmLists`);
};

//更新廠商列表
export const updateFirmLists = async (data: FirmObject): Promise<void> => {
  request.post(`/firmLists`, data);
};
