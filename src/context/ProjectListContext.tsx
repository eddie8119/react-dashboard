import { createContext, useReducer, useContext, FC, ReactNode } from 'react';
import ProjectFilterReducer, {
  INITIAL_STATE,
  ACTIONS,
} from '../reducers/ProjectFilterReducer';
import useProjectListsQuery from '../hooks/useProjectListsQuery';

interface ProjectListProviderProps {
  children: ReactNode;
}

interface ProjectListContextType {
  variables: any;
  projectListsdata: any;
  handleChangeCategory: (data: string) => void;
  handleChangeKeyword: (data: string) => void;
}

export const ProjectListContext = createContext(INITIAL_STATE);

export const ProjectListProvider: FC<ProjectListProviderProps> = ({
  children,
}) => {
  const [variables, dispatch] = useReducer(ProjectFilterReducer, INITIAL_STATE);
  const { projectListsdata } = useProjectListsQuery({ variables });

  const handleChangeCategory = (data: string) => {
    dispatch({
      type: ACTIONS.CHANGE_CATEGORY,
      payload: { category: data },
    });
  };

  const handleChangeKeyword = (data: string) => {
    dispatch({
      type: ACTIONS.CHANGE_KEYWORD,
      payload: { keyword: data },
    });
  };

  const value: ProjectListContextType = {
    variables,
    projectListsdata,
    handleChangeCategory,
    handleChangeKeyword,
  };

  return (
    <ProjectListContext.Provider value={value}>
      {children}
    </ProjectListContext.Provider>
  );
};

export const useProjectList = () => {
  const context = useContext(ProjectListContext);
  if (!context) {
    throw new Error(
      'useProjectListContext must be used within a ProjectListProvider',
    );
  }
  return context;
};
