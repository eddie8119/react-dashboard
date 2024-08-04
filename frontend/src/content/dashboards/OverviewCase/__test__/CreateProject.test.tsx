import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import CreateProject from '../CreateProject';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock('../../../../api/project', () => ({
  updateProject: vi.fn(),
  getProjectTypeLists: vi.fn().mockResolvedValue([
    { id: '0', name: 'House' },
    { id: '1', name: 'Mansion' },
  ]),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('CreateProject', () => {
  const mockHandleCreateProjectClose = vi.fn();

  test('can not submit without fill in', async () => {
    render(
      <CreateProject handleCreateProjectClose={mockHandleCreateProjectClose} />,
    );

    const nameInput = screen.getByTestId('name-input');
    const fileNumberInput = screen.getByTestId('file-number-input');
    const categorySelect = screen.getByTestId('category-select');
    const submitButton = screen.getByTestId('submit-btn');

    await userEvent.click(submitButton);
    // await userEvent.type(nameInput, 'taipei101');
    // const typeOptions = await screen.findAllByTestId('project-type-option');
    // expect(typeOptions).toHaveLength(2);
  });
  test('should create a project', async () => {
    // const handleClick = jest.fn();
    // render(<CreateProject handleCreateProjectClose={handleClick} />);
    // const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement;
    // const fileNumberInput = screen.getByLabelText(
    //   /FileNumber/i,
    // ) as HTMLInputElement;
    // const categorySelect = screen.getByLabelText(
    //   /Category/i,
    // ) as HTMLSelectElement;
    // userEvent.type(nameInput, 'taipei101');
    // userEvent.type(fileNumberInput, '1234abc');
    // userEvent.selectOptions(categorySelect, 'Mansion');
    // const createButton = screen.getByRole('button');
    // await userEvent.click(createButton);
    // // Verify updateProject was called with the correct data
    // expect(updateProject).toHaveBeenCalledWith({
    //   id: expect.any(Number),
    //   name: 'taipei101',
    //   status: 'Progress',
    //   date: expect.any(String),
    //   picture: '',
    //   fileNumber: '1234abc',
    //   cost: 0,
    //   category: 'Mansion',
    // });
    // // Verify the form fields are reset
    // expect(nameInput.value).toBe('');
    // expect(fileNumberInput.value).toBe('');
    // expect(categorySelect.value).toBe('');
    // // Verify handleCreateProjectClose was called
    // expect(handleClick).toHaveBeenCalled();
  });
});
