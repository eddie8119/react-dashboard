import axios, { AxiosResponse } from 'axios';
const url = 'http://localhost:3000';

//取得廠商列表
export const getFirmLists = async ():Promise<AxiosResponse> => { 
  return await axios.get<FirmObject[]>(`${url}/firmLists`);
};

