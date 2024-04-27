import { createContext, useReducer, FC, ReactNode } from 'react';
import ProjectFilterReducer, {
  INITIAL_STATE,
  ActionTypes,
  IntState,
  Action,
} from '../reducers/projectFilterReducer';
import useProjectListsQuery from '../hooks/useProjectListsQuery';

interface ProjectListProviderProps {
  children: ReactNode;
}

interface ProjectListContextType {
  variables: IntState;
  projectListsdata: ProjectData[];
  handleChangeCategory: (data: string) => void;
  handleChangeKeyword: (data: string) => void;
}

export const ProjectListContext = createContext<ProjectListContextType>({
  variables: {
    filter: { keyword: '', category: '' },
    pagination: {
      current: 0,
      pageSize: 0,
      showSizeChanger: true,
      pageSizeOptions: [],
    },
  },
  projectListsdata: [],
  handleChangeCategory: () => {},
  handleChangeKeyword: () => {},
});

export const ProjectListProvider: FC<ProjectListProviderProps> = ({
  children,
}) => {
  const [variables, dispatch] = useReducer(ProjectFilterReducer, INITIAL_STATE);

  const { projectListsdata } = useProjectListsQuery({ variables });

  const handleChangeCategory = (category: string): void => {
    dispatch({
      type: ActionTypes.CHANGE_CATEGORY,
      payload: { category },
    });
  };

  const handleChangeKeyword = (keyword: string): void => {
    dispatch({
      type: ActionTypes.CHANGE_KEYWORD,
      payload: { keyword },
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

// 更精簡的寫法
// export const useProjectList = () => {
//   const context = useContext(ProjectListContext);
//   return context;
// };
