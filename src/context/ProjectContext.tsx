import { createContext } from 'react';

const ProjectContext = createContext<ProjectData>({
  id: 0,
  name: '',
  status: '',
  date: new Date(),
  picture: '',
  fileNumber: '',
  cost: 0,
  category: '',
  thirdPartyLists: [],
});

export default ProjectContext;
