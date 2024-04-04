import axios from 'axios';

//專案協力廠商
export const editProjectThirdParty = async (projectId, data) => {
  await axios.patch(`http://localhost:3000/projectLists/${projectId}`, {
    thirdPartyLists: data,
  });
};
