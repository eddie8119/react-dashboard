import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddFirm from '../AddFirm';
import FirmListCreateContext from '../../../../context/FirmListCreateContext';
import { vi } from 'vitest';
import axios from 'axios';

vi.mock('../../../../api/firm', () => ({
  updateFirmLists: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('AddFirm', () => {
  const mockValue = {
    updateFirmList: false,
    firmLists: [],
    handlerSetUpdateFirmList: vi.fn(),
  };

  test('should submit the form to add firm type', async () => {
    render(
      <FirmListCreateContext.Provider value={mockValue}>
        <AddFirm />
      </FirmListCreateContext.Provider>,
    );

    const firmNameInput = screen.getByLabelText('Firm');
    const createBtn = screen.getByRole('create-firmType');

    await userEvent.clear(firmNameInput); //技巧 每次測試前先清空
    await userEvent.type(firmNameInput, 'New Firm');
    await userEvent.click(createBtn);

    vi.spyOn(axios, 'post').mockResolvedValue({ id: '1', name: 'New Firm' });

    await waitFor(() => {
      expect(mockValue.handlerSetUpdateFirmList).toHaveBeenCalled();
    });

    expect(firmNameInput).toHaveValue('');
  });

  test('submit the space will show "Cannot be only whitespace"', async () => {
    render(<AddFirm />);

    const firmNameInput = screen.getByLabelText('Firm');
    const createBtn = screen.getByRole('create-firmType');

    await userEvent.clear(firmNameInput);
    await userEvent.type(firmNameInput, ' ');
    await userEvent.click(createBtn);

    expect(screen.getByText('Cannot be only whitespace')).toBeInTheDocument();
  });
});
