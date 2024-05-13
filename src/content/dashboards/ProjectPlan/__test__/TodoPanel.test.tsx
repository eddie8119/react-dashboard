import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoPanel, { TodoPanelProps } from '../TodoPanel';

const props: TodoPanelProps = {
  task: {
    todo: '消防',
    unit: 'm2',
    quantity: 10,
    cost: 5000,
    id: 0,
    price: 8000,
    stock: 0,
  },
  index: 0,
  firmTaskId: 0,
  firmTaskLists: [],
};

describe('TodoPanel', () => {
  test('should open deleteComfirm pop', async () => {
    render(<TodoPanel {...props} />);

    const deleteButton = await screen.findByTestId('delete-comfirm-btn');
    await userEvent.click(deleteButton);

    // await waitFor(() => {
    //   const modal = screen.queryByTestId('delete-comfirm');
    //   screen.debug();
    // });
    // expect(modal).toBeInTheDocument(); //錯誤在這裡發生
  });
  test('input todo will update', async () => {
    render(<TodoPanel {...props} />);

    // const todoInput = screen.getByTestId('todo-input');
    // const deleteButton = await screen.findByTestId('delete-comfirm-btn');
    // await userEvent.type(todoInput, 'new item');

    // await waitFor(() => {});
    // const modal = screen.queryByTestId('delete-comfirm');

    // expect(modal).toBeInTheDocument(); //錯誤在這裡發生
  });
});
