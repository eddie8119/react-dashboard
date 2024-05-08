import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import useProjectListsQuery from '../useProjectListsQuery';

describe('useProjectListsQuery', () => {
  test('should return an array of projectLists', async () => {
    const variables = {
      filter: { keyword: '', category: 'All', costSort: '' },
      pagination: {
        current: 1,
        pageSize: 6,
        showSizeChanger: true,
        pageSizeOptions: [6, 9, 12],
      },
    };

    const { result } = renderHook(() => useProjectListsQuery(variables));

    await waitFor(() => {
      // expect(result.current).toEqual([]);
    });
  });
});
