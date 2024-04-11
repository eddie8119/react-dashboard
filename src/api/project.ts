import axios from 'axios';
const url = 'http://localhost:3000';

//取得專案類型列表
export const getProjectTypeLists = async ():Promise<ProjectTypeObject[]> => {
  return await axios.get(`${url}/projectTypeLists`);
};

//取得所有專案列表
export const getProjectLists = async ():Promise<ProjectData[]> => {
  return await axios.get(`${url}/projectLists`);
};

//更新專案列表
export const updateProject = async (data: ProjectData): Promise<void> => {
  axios.post(`${url}/projectLists`, data);
};

//取得單一專案
export const getProject = async (id: string) => {
  return await axios.get(`${url}/projectLists/${id}`);
};

//刪除專案
export const deleteProject = async (id: string): Promise<void> => {
  axios.delete(`${url}/projectLists/${id}`);
};

//編輯專案
export const editProject = async (
  id: string,
  data: ProjectData,
): Promise<void> => {
  await axios.put(`${url}/projectLists/${id}`, data);
};

//更新專案協力廠商
export const editProjectThirdParty = async (
  id: string,
  data: ThirdPartyData[],
): Promise<void> => {
  await axios.patch(`${url}/projectLists/${id}`, {
    thirdPartyLists: data,
  });
};
