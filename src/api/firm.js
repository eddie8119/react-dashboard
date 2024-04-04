import axios from 'axios';

//取得廠商列表
export const getFirmLists = async () => {
  return await axios.get('http://localhost:3000/firmLists');
};
