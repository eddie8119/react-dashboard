// import { isUndefined } from 'lodash';

const DEFAULT_PAGINATION = {
  current: 1,
  pageSize: 6,
  showSizeChanger: true,
  pageSizeOptions: [3, 6, 8],
};

export const INITIAL_STATE = {
  filter: { keyword: '', category: 'All' },
  pagination: DEFAULT_PAGINATION,
};

export const ACTIONS = {
  CHANGE_KEYWORD: 'CHANGE_KEYWORD',
  CHANGE_CATEGORY: 'CHANGE_CATEGORY',
  CHANGE_PAGINATION: 'CHANGE_PAGINATION',
  CHANGE_SORT: 'CHANGE_SORT',
};

const projectFilterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_KEYWORD:
      return {
        ...state,
        filter: { ...state.filter, keyword: action.payload.keyword },
        pagination: { ...state.pagination, current: 1 },
      };
    case ACTIONS.CHANGE_CATEGORY:
      return {
        ...state,
        filter: { ...state.filter, category: action.payload.category },
        pagination: { ...state.pagination, current: 1 },
      };
    case ACTIONS.CHANGE_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload.pagination },
      };
    case ACTIONS.CHANGE_SORT:
      const newVariable = { ...state, sort: action.payload.sort };
      //   if (isUndefined(newVariable.sort.order)) delete newVariable['sort'];
      return newVariable;
    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
};

export default projectFilterReducer;
