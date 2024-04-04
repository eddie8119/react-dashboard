import axios from 'axios';

//取得專案類型列表
export const getProjectTypeLists = async () => {
  return await axios.get(`http://localhost:3000/projectTypeLists`);
};

//取得所有專案列表
export const getProjectLists = async () => {
  return await axios.get(`http://localhost:3000/projectLists`);
};

//更新專案列表
export const updateProject = async (data) => {
  axios.post('http://localhost:3000/projectLists', data);
};

//取得單一專案
export const getProject = async (id) => {
  return await axios.get(`http://localhost:3000/projectLists/${id}`);
};

//刪除專案
export const deleteProject = async (id) => {
  axios.delete(`http://localhost:3000/projectLists/${id}`);
};

//編輯專案
export const editProject = async (id, data) => {
  await axios.put(`http://localhost:3000/projectLists/${id}`, data);
};

//更新專案協力廠商
export const editProjectThirdParty = async (id, data) => {
  await axios.patch(`http://localhost:3000/projectLists/${id}`, {
    thirdPartyLists: data,
  });
};