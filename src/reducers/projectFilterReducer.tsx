// import { isUndefined } from 'lodash';

const projectFilterReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_KEYWORD':
      return {
        ...state,
        filter: { ...state.filter, keyword: action.payload.keyword },
        pagination: { ...state.pagination, current: 1 },
      };
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        filter: { ...state.filter, category: action.payload.category },
        pagination: { ...state.pagination, current: 1 },
      };
    case 'CHANGE_PAGINATION':
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload.pagination },
      };
    case 'CHANGE_SORT':
      const newVariable = { ...state, sort: action.payload.sort };
      //   if (isUndefined(newVariable.sort.order)) delete newVariable['sort'];
      return newVariable;
    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
};

export default projectFilterReducer;
