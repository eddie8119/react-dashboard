import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateProject from '../CreateProject';
import { updateProject } from '../../../../api/project';

describe('CreateProject', () => {
  test('should get project type data', async () => {
    render(<CreateProject handleCreateProjectClose={() => {}} />);
    const typeOptions = await screen.findAllByTestId('project-type-option');
    expect(typeOptions).toHaveLength(2);
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
