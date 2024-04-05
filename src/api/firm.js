import axios from 'axios';
const url = 'http://localhost:3000';

//取得廠商列表
export const getFirmLists = async () => {
  return await axios.get(`${url}/firmLists`);
};
