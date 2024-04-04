import axios from 'axios';

//取得所有專案列表
export const getProjectLists = async () => {
  return await axios.get(`http://localhost:3000/projectLists`);
};

//專案協力廠商
export const editProjectThirdParty = async (projectId, data) => {
  await axios.patch(`http://localhost:3000/projectLists/${projectId}`, {
    thirdPartyLists: data,
  });
};
