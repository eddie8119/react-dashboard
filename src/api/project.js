import axios from 'axios';
const url = 'http://localhost:3000';

//取得專案類型列表
export const getProjectTypeLists = async () => {
  return await axios.get(`${url}/projectTypeLists`);
};

//取得所有專案列表
export const getProjectLists = async () => {
  return await axios.get(`${url}/projectLists`);
};

//更新專案列表
export const updateProject = async (data) => {
  axios.post(`${url}/projectLists`, data);
};

//取得單一專案
export const getProject = async (id) => {
  return await axios.get(`${url}/projectLists/${id}`);
};

//刪除專案
export const deleteProject = async (id) => {
  axios.delete(`${url}/projectLists/${id}`);
};

//編輯專案
export const editProject = async (id, data) => {
  await axios.put(`${url}/projectLists/${id}`, data);
};

//更新專案協力廠商
export const editProjectThirdParty = async (id, data) => {
  await axios.patch(`${url}/projectLists/${id}`, {
    thirdPartyLists: data,
  });
};
