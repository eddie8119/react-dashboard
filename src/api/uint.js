import axios from 'axios';
const url = 'http://localhost:3000';

//取得單位列表
export const getUintLists = async () => {
  return await axios.get(`${url}/uintLists`);
};
