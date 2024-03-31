import { createContext } from 'react';

interface ProjectContextType {
  projectInfo: ProjectData;
  handlerSetUpdateProjectInfo: () => void;
}

const ProjectContext = createContext<ProjectContextType>({
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
});

export default ProjectContext;
