import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectSelect from './index';
import { ProjectListContext } from '../../context/ProjectListContext';
import { vi } from 'vitest';

describe('ProjectSelect', () => {
  const changeCategory = vi.fn();
  const changeKeyword = vi.fn();
  const changeCostSort = vi.fn();

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
    handleChangeCategory: changeCategory,
    handleChangeKeyword: changeKeyword,
    handleChangeCostSort: changeCostSort,
    handleChangePagination: () => {},
  };

  test('changes the category selection', async () => {
    render(
      <ProjectListContext.Provider value={mockValue}>
        <ProjectSelect
          projectTypeLists={[
            { id: '0', name: 'House' },
            { id: '1', name: 'Mansion' },
          ]}
        />
      </ProjectListContext.Provider>,
    );

    const categorySelect = screen.getByTestId('category-select');
    // const categoryOptions = await screen.findAllByTestId(
    //   'category-select-option',
    // );
    await userEvent.type(categorySelect, 'House');

    expect(categorySelect).toEqual('House');
  });

  test.only('changes the keyword search', async () => {
    render(
      <ProjectListContext.Provider value={mockValue}>
        <ProjectSelect
          projectTypeLists={[
            { id: '0', name: 'House' },
            { id: '1', name: 'Mansion' },
          ]}
        />
      </ProjectListContext.Provider>,
    );

    const searchInput = screen.getByTestId('search-name');
    await userEvent.type(searchInput, 'test');
  });
});
