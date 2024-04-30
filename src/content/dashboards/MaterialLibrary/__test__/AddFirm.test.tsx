import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddFirm from '../AddFirm';

describe('AddFirm', () => {
  test('should submit the form to add firm type', async () => {
    render(<AddFirm />);

    const firmNameInput = screen.getByLabelText('Firm');
    const createBtn = screen.getByRole('create-firmType');

    await userEvent.clear(firmNameInput); //技巧 每次測試前先清空
    await userEvent.type(firmNameInput, 'New Firm');
    userEvent.click(createBtn);

    //問題:半對 顯示綠色與紅色 顯示AxiosError: Network Error
    // Wait for the form to reset after submission 注意這 一開始沒用
    await waitFor(() => {
      expect(firmNameInput).toHaveValue('');
    });
  });
});
