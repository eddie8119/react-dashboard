import { createContext, useReducer, FC, ReactNode } from 'react';
import ProjectFilterReducer, {
  INITIAL_STATE,
  ActionTypes,
  IntState,
} from '../reducers/projectFilterReducer';
import useProjectListsQuery from '../hooks/useProjectListsQuery';

interface ProjectListProviderProps {
  children: ReactNode;
}

interface ProjectListContextType {
  variables: IntState;
  projectListsdata: ProjectData[];
  handleChangeCategory: (category: string) => void;
  handleChangeKeyword: (keyword: string) => void;
  handleChangeCostSort: (costSort: string) => void;
}

export const ProjectListContext = createContext<ProjectListContextType>({
  variables: {
    filter: { keyword: '', category: '', costSort: '' },
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
  handleChangeCostSort: () => {},
});

export const ProjectListProvider: FC<ProjectListProviderProps> = ({
  children,
}) => {
  const [variables, dispatch] = useReducer(ProjectFilterReducer, INITIAL_STATE);

  const { projectListsdata } = useProjectListsQuery(variables);

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

  const handleChangeCostSort = (costSort: string): void => {
    dispatch({
      type: ActionTypes.CHANGE_SORT,
      payload: { costSort },
    });
  };

  const value: ProjectListContextType = {
    variables,
    projectListsdata,
    handleChangeCategory,
    handleChangeKeyword,
    handleChangeCostSort,
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
