import { render, screen, waitFor } from '@testing-library/react';
import CreateFirmTask from '../CreateFirmTask';
import ProjectContext from '../../../../context/ProjectContext';
import TaskContext from '../../../../context/TaskContext';
import { vi } from 'vitest';
import axios from 'axios';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: vi.fn().mockReturnValue('Mock Translation'),
  }),
}));

vi.mock('../../../../api/unit', () => ({
  getUnitLists: vi
    .fn()
    .mockResolvedValue({ data: [{ id: '1', name: 'New Firm' }] }),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('CreateFirmTask', () => {
  test('renders FirmTaskPanel components based on firmTaskLists', async () => {
    render(
      <TaskContext.Provider value={{ unitLists: [] }}>
        <CreateFirmTask />
      </TaskContext.Provider>,
    );
  });
});
