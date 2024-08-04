import { useContext, useReducer } from 'react';
import { render } from '@testing-library/react';
import { ProjectListContext } from '../ProjectListContext.tsx';
import ProjectFilterReducer, {
  INITIAL_STATE,
  ActionTypes,
  IntState,
} from '../../reducers/projectFilterReducer.tsx';
import useProjectListsQuery from '../../hooks/useProjectListsQuery.tsx';
import { vi } from 'vitest';

describe('ProjectListContext', () => {
  const mockValue = {
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
    handleChangeCategory: vi.fn(),
    handleChangeKeyword: vi.fn(),
    handleChangeCostSort: vi.fn(),
    handleChangePagination: vi.fn(),
  };

  test('ProjectListContext can get firmLists data', () => {
    const TestComponent = () => {
      const [variables, dispatch] = useReducer(
        ProjectFilterReducer,
        INITIAL_STATE,
      );

      const { projectListsdata } = useProjectListsQuery(variables);
      return <div>Test Component</div>;
    };

    render(
      <ProjectListContext.Provider value={mockValue}>
        <TestComponent />
      </ProjectListContext.Provider>,
    );
  });
});
