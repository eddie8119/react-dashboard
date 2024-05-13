import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import PopUp from './index';

describe('PopUp', () => {
  const handlePopClose = vi.fn();
  const deleteOnClick = vi.fn();

  test('renders PopUp with correct props', () => {
    render(
      <PopUp
        popupTitle="Test Title"
        popupIndex="Test Index"
        openComfirmPop={true}
        deleteOnClick={deleteOnClick}
        handlePopClose={handlePopClose}
      />,
    );

    const dialog = screen.getByRole('dialog');
    const title = screen.getByText('Test Title');
    const index = screen.getByText('Test Index');

    // Check if the dialog is open
    expect(dialog).toBeInTheDocument();
    // Check if the title and index are correctly displayed
    expect(title).toHaveTextContent('Test Title');
    expect(index).toHaveTextContent('Test Index');
  });

  test('PopUp can handle delete and close pop events', async () => {
    render(
      <PopUp
        popupTitle="Test Title"
        popupIndex="Test Index"
        openComfirmPop={true}
        deleteOnClick={deleteOnClick}
        handlePopClose={handlePopClose}
      />,
    );

    const backButton = screen.getByText('back');
    const deleteButton = screen.getByText('delete');

    // Simulate click events and check if the correct functions are called
    //優化: 找到關閉談窗的驗證方式 : (目前用過dialog與title .not.toBeInTheDocument 還失敗)
    await userEvent.click(backButton);
    expect(handlePopClose).toHaveBeenCalledTimes(1);

    await userEvent.click(deleteButton);
    expect(deleteOnClick).toHaveBeenCalledTimes(1);
  });
});
