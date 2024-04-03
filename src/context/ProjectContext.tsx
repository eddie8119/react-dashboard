import { createContext } from 'react';

interface ProjectContextType {
  projectInfo: ProjectData;
  handlerSetUpdateProjectInfo: () => void;
}

export const initProjectContext: ProjectContextType = {
  projectInfo: {
    id: '0',
    name: '',
    status: '',
    date: new Date(),
    picture: '',
    fileNumber: '',
    cost: 0,
    category: '',
    thirdPartyLists: [],
  },
  handlerSetUpdateProjectInfo: () => {},
};

const ProjectContext = createContext<ProjectContextType>(initProjectContext);

export default ProjectContext;
