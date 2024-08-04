// import { isUndefined } from 'lodash';

export interface Pagination {
  current: number;
  pageSize: number;
  showSizeChanger: boolean;
  pageSizeOptions: number[];
}

interface Filter {
  keyword: string;
  category: string;
  costSort: string;
}
export interface IntState {
  filter: Filter;
  pagination: Pagination;
}

type Payload =
  | { category: string }
  | { keyword: string }
  | { current: number }
  | { costSort: string };

export interface Action {
  payload: Payload;
  type: string;
}

const DEFAULT_PAGINATION: Pagination = {
  current: 1,
  pageSize: 6,
  showSizeChanger: true,
  pageSizeOptions: [6, 9, 12],
};

export const INITIAL_STATE: IntState = {
  filter: { keyword: '', category: 'All', costSort: '' },
  pagination: DEFAULT_PAGINATION,
};

export enum ActionTypes {
  CHANGE_KEYWORD = 'CHANGE_KEYWORD',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  CHANGE_PAGINATION = 'CHANGE_PAGINATION',
  CHANGE_SORT = 'CHANGE_SORT',
}

const ProjectFilterReducer = (state: IntState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_KEYWORD:
      return {
        ...state,
        filter: {
          ...state.filter,
          keyword: (action.payload as { keyword: string }).keyword,
        },
        pagination: { ...state.pagination, current: 1 },
      };
    case ActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: (action.payload as { category: string }).category,
        },
        pagination: { ...state.pagination, current: 1 },
      };
    case ActionTypes.CHANGE_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          current: (action.payload as { current: number }).current,
        },
      };
    case ActionTypes.CHANGE_SORT:
      return {
        ...state,
        filter: {
          ...state.filter,
          costSort: (action.payload as { costSort: string }).costSort,
        },
        pagination: { ...state.pagination, current: 1 },
      };
    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
};

export default ProjectFilterReducer;
