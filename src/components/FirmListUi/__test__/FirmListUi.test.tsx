import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import FirmListUi from '../index';

describe('FirmListUi', () => {
  const handleChoseFirm = vi.fn();

  const firmLists = [
    { id: '1', name: 'Firm 1' },
    { id: '2', name: 'Firm 2' },
  ];

  test('renders FirmListUi with correct props and handles click events', async () => {
    render(
      <FirmListUi
        firmLists={firmLists}
        thirdParties={['Firm 1']}
        handleChoseFirm={handleChoseFirm}
      />,
    );
    screen.debug();

    const firmButtons = screen.getAllByRole('firm-button');
    // Check if the firm names are correctly displayed
    expect(firmButtons).toHaveLength(2);

    // check if the correct function is called
    userEvent.click(screen.getByText('Firm 1'));
    await waitFor(() => {
      expect(handleChoseFirm).toHaveBeenCalledWith('Firm 1');
    });
  });
});
