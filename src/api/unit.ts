import axios from 'axios';
const url = 'http://localhost:3000';

//取得單位列表
export const getUnitLists = async ():Promise<UnitMenuObject[]> => {
  return await axios.get(`${url}/unitLists`);
};