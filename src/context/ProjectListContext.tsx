import { createContext, useReducer, useContext } from 'react';
import ProjectFilterReducer, {
  INITIAL_STATE,
  ACTIONS,
} from '../reducers/ProjectFilterReducer';
import useProjectListsQuery from '../hooks/useProjectListsQuery';

export const ProjectListContext = createContext(INITIAL_STATE);

export const ProjectListProvider = ({ children }) => {
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

  const value = {
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
