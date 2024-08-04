import ProjectFilterReducer, {
  ActionTypes,
  INITIAL_STATE,
} from '../reducers/projectFilterReducer';

describe('ProjectListContext', () => {
  test('should handle CHANGE_KEYWORD', () => {
    const action = {
      type: ActionTypes.CHANGE_KEYWORD,
      payload: { keyword: 'new keyword' },
    };
    const newState = ProjectFilterReducer(INITIAL_STATE, action);
    expect(newState.filter.keyword).toEqual('new keyword');
    expect(newState.pagination.current).toEqual(1); // current page should be reset to 1
  });

  test('should handle CHANGE_CATEGORY', () => {
    const action = {
      type: ActionTypes.CHANGE_CATEGORY,
      payload: { category: 'new category' },
    };
    const newState = ProjectFilterReducer(INITIAL_STATE, action);
    expect(newState.filter.category).toEqual('new category');
  });

  test('should handle CHANGE_PAGINATION', () => {
    const action = {
      type: ActionTypes.CHANGE_PAGINATION,
      payload: { current: 2 },
    };
    const newState = ProjectFilterReducer(INITIAL_STATE, action);
    expect(newState.pagination.current).toEqual(2);
  });

  test('should handle CHANGE_SORT', () => {
    const action = {
      type: ActionTypes.CHANGE_SORT,
      payload: { costSort: 'new sort' },
    };
    const newState = ProjectFilterReducer(INITIAL_STATE, action);
    expect(newState.filter.costSort).toEqual('new sort');
    expect(newState.pagination.current).toEqual(1);
  });
});
