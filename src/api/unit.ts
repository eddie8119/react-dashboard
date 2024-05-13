import { AxiosResponse } from 'axios';
import request from "../utils/request";

//取得單位列表
export const getUnitLists = async ():Promise<AxiosResponse> => {
  return await request.get<UnitMenuObject[]>(`/unitLists`); //期望 data 返回 UnitMenuObject 對象數組
};
