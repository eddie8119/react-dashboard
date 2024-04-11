import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateTodo from '../CreateTodo';
import { editProjectThirdParty } from '../../../api/project';
import { getUnitLists } from '../../../api/unit';

jest.mock('../../../api/project', () => ({
  editProjectThirdParty: jest.fn(),
}));

jest.mock('../../../api/project', () => ({
  getUnitLists: jest.fn().mockResolvedValue({
    data: [
      { id: 1, unit: 'cm' },
      { id: 2, unit: 'm' },
    ],
  }),
}));

describe('CreateTodo', () => {
  test('fetches and displays unit', async () => {
    render(<CreateTodo firmTaskId={0} />);

    await waitFor(() => {
      expect(getUnitLists).toHaveBeenCalled();
    });

    const unitOptions = screen.getAllByRole('option');

    expect(unitOptions).toHaveLength(3); // Including the default "Select Unit" option
    expect(unitOptions[1]).toHaveTextContent('cm');
    expect(unitOptions[2]).toHaveTextContent('m');
  });

  test('without fill in todo inpute can not submit ', async () => {
    render(<CreateTodo firmTaskId={0} />);

    const createItemButton = screen.getByRole('button', {
      name: /add item/i,
    });
    await userEvent.click(createItemButton);

    const todoErrorMessage = screen.getByText(/Todo is required/i);
    expect(todoErrorMessage).toBeInTheDocument();
  });

  test('fill in only todo inpute can submit', async () => {
    render(<CreateTodo firmTaskId={0} />);

    const todoInput = screen.getByLabelText(/Todo/i);
    await userEvent.type(todoInput, 'this is todo');

    const createItemButton = screen.getByRole('button', {
      name: /add item/i,
    });
    await userEvent.click(createItemButton);

    expect(editProjectThirdParty).toHaveBeenCalledWith(
      expect.anything(), // Assuming the first argument is the project ID, which we're not checking here
      expect.arrayContaining([
        expect.objectContaining({
          todo: 'this is todo',
          quantity: 0,
          unit: '',
          stock: 0,
          cost: 0,
          price: 0,
        }),
      ]),
    );
    // 清空input
    expect(todoInput).toHaveValue('');
  });

  test('fill in todo, quantity, and unit can submit', async () => {
    render(<CreateTodo firmTaskId={0} />);

    const todoInput = screen.getByLabelText('Todo');
    const quantityInput = screen.getByLabelText('Quantity');
    const unitSelect = screen.getByLabelText('unit');

    await userEvent.type(todoInput, 'this is todo');
    await userEvent.type(quantityInput, '1');
    await userEvent.selectOptions(unitSelect, 'm');

    const createItemButton = screen.getByRole('button', {
      name: /add item/i,
    });
    await userEvent.click(createItemButton);

    expect(editProjectThirdParty).toHaveBeenCalled();
    // 清空input
    expect(todoInput).toHaveValue('');
    expect(quantityInput).toHaveValue('');
    expect(unitSelect).toHaveValue('');
  });
});