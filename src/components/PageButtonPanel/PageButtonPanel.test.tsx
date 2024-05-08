import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import PageButtonPanel from './index';

describe('PageButtonPanel', () => {
  vi.mock('../../api/project');
  vi.mock('../../hooks/usePopup');
  // vi.mock('react-router-dom', () => ({
  //   ...vi.requireActual('react-router-dom'),
  //   useNavigate: vi.fn(),
  // }));

  // const mockDeleteProject = vi.requireMock('../../api/project').deleteProject;
  // const mockUsePopup = vi.requireMock('../../hooks/usePopup').default;
  // const mockUseNavigate = vi.requireMock('react-router-dom').useNavigate;

  // const mockDeleteProject = deleteProject as vi.MockedFunction<
  //   typeof deleteProject
  // >;
  // const mockUsePopup = usePopup as vi.MockedFunction<typeof usePopup>;
  // const mockUseNavigate = useNavigate as vi.MockedFunction<typeof useNavigate>;

  test('renders PageButtonPanel and handles project removal', async () => {
    // const handlePopOpen = vi.fn();
    // const handlePopClose = vi.fn();
    // const navigate = vi.fn();
    // mockUsePopup.mockReturnValue({
    //   openComfirmPop: false,
    //   handlePopOpen,
    //   handlePopClose,
    // });
    // mockUseNavigate.mockReturnValue(navigate);
    // render(<PageButtonPanel projectId="1" projectName="Project 1" />);
    // // Click the button to open the popup
    // fireEvent.click(screen.getByText('remove project'));
    // // Check if the handlePopOpen function is called
    // expect(handlePopOpen).toHaveBeenCalled();
    // // Simulate the deletion of the project
    // await mockDeleteProject('1');
    // // Check if the navigate function is called to redirect the user
    // expect(navigate).toHaveBeenCalledWith('/');
  });
});
