import { AxiosResponse } from 'axios';
import request from "../utils/request";


//取得專案類型列表
export const getProjectTypeLists = async ():Promise<AxiosResponse> => {
  return await request.get<ProjectTypeObject[]>(`/projectTypeLists`);
};

//取得所有專案列表
export const getProjectLists = async ():Promise<AxiosResponse> => {
  return await request.get<ProjectData[]>(`/projectLists`);
};

//更新專案列表
export const updateProject = async (data: ProjectData): Promise<void> => {
  request.post(`/projectLists`, data);
};

//取得單一專案
export const getProject = async (id: string):Promise<AxiosResponse> => {
  return await request.get<ProjectData>(`/projectLists/${id}`);
};

//刪除專案
export const deleteProject = async (id: string):Promise<AxiosResponse> => {
  return request.delete(`/projectLists/${id}`);
};

//編輯專案
export const editProject = async (
  id: string,
  data: ProjectData,
): Promise<void> => {
  await request.put(`/projectLists/${id}`, data);
};

//更新專案協力廠商
export const editProjectThirdParty = async (
  id: string,
  updateThirdPartyListsData: ThirdPartyData[],
  projectCostData?: number,
): Promise<void> => {
  await request.patch(`/projectLists/${id}`, {
    thirdPartyLists: updateThirdPartyListsData,
    cost: projectCostData,
  });
};
