import axios, { AxiosResponse } from 'axios';
const url = 'http://localhost:3000';

//取得單位列表
export const getUnitLists = async ():Promise<AxiosResponse> => {
  return await axios.get<UnitMenuObject[]>(`${url}/unitLists`); //期望 data 返回 UnitMenuObject 對象數組
};
