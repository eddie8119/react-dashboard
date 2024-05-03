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
    const { debug } = render(<TodoPanel {...props} />);

    const deleteButton = await screen.findByTestId('delete-comfirm-btn');
    userEvent.click(deleteButton);

    await waitFor(() => {});
    const modal = screen.queryByTestId('delete-comfirm');
    // debug(modal);
    expect(modal).toBeInTheDocument(); //錯誤在這裡發生
  });
});
