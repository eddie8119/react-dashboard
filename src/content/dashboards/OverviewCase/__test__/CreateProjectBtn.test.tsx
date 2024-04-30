import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateProjectBtn from '../CreateProjectBtn';

describe('CreateProject', () => {
  test('opens and closes the create project dialog', async () => {
    render(<CreateProjectBtn />);

    const createProjectButton = screen.getByTestId('create-project-btn');
    await userEvent.click(createProjectButton);
    const createProjectDialog = screen.queryByTestId('create-project-dialog');
    expect(createProjectDialog).toBeInTheDocument();

    const closeIcon = screen.queryByTestId('close-create-project-dialog');

    userEvent.click(closeIcon!); //有返回 Promise 才要用 await

    // Wait for the dialog to be removed from the document
    // 當按一下關閉圖示時，關閉對話方塊的狀態更新可能不會立即反映在 DOM 中
    // waitFor 函數來等待對話方塊從文件中刪除
    await waitFor(() => {
      expect(createProjectDialog).not.toBeInTheDocument();
    });
  });
});
