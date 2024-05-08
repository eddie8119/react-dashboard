import { useContext } from 'react';
import { render } from '@testing-library/react';
import ProjectContext from '../ProjectContext.tsx';
import { vi } from 'vitest';

describe('ProjectContext', () => {
  const mockValue = {
    projectInfo: {
      name: '大安蔡宅',
      status: 'Completed',
      fileNumber: '001',
      category: 'Mansion',
      id: '0',
      date: '2024-03-20T15:03:05.138Z',
      picture: ' ',
      cost: 169000,
      sellingPrice: 210000,
      thirdPartyLists: [],
    },
    handlerSetUpdateProjectInfo: vi.fn(),
  };

  test('ProjectContext can get projectInfo data', () => {
    const TestComponent = () => {
      const { projectInfo } = useContext(ProjectContext);

      expect(projectInfo).toEqual({
        name: '大安蔡宅',
        status: 'Completed',
        fileNumber: '001',
        category: 'Mansion',
        id: '0',
        date: '2024-03-20T15:03:05.138Z',
        picture: ' ',
        cost: 169000,
        sellingPrice: 210000,
        thirdPartyLists: [],
      });
      return <div>Test Component</div>;
    };

    render(
      <ProjectContext.Provider value={mockValue}>
        <TestComponent />
      </ProjectContext.Provider>,
    );
  });

  test('handlerSetUpdateProjectInfo is defined and can be called', () => {
    const TestComponent = () => {
      const { handlerSetUpdateProjectInfo } = useContext(ProjectContext);
      handlerSetUpdateProjectInfo();
      expect(handlerSetUpdateProjectInfo).toHaveBeenCalled();
      return <div>Test Component</div>;
    };

    render(
      <ProjectContext.Provider value={mockValue}>
        <TestComponent />
      </ProjectContext.Provider>,
    );
  });
});
