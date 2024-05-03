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
    expect(title).toBeInTheDocument();
    expect(index).toBeInTheDocument();
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
    userEvent.click(backButton);
    await waitFor(() => expect(handlePopClose).toHaveBeenCalledTimes(1));

    userEvent.click(deleteButton);
    await waitFor(() => expect(deleteOnClick).toHaveBeenCalledTimes(1));
  });
});
