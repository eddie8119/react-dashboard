import { useContext } from 'react';
import { render } from '@testing-library/react';
import TaskContext from '../TaskContext.tsx';

describe('TaskContext', () => {
  test('taskContext can get unitLists data', () => {
    const TestComponent = () => {
      const { unitLists } = useContext(TaskContext);
      expect(unitLists).toEqual([
        {
          id: '0',
          unit: 'm',
        },
      ]);
      return <div>Test Component</div>;
    };
    const mockValue = {
      unitLists: [
        {
          id: '0',
          unit: 'm',
        },
      ],
    };
    render(
      <TaskContext.Provider value={mockValue}>
        <TestComponent />
      </TaskContext.Provider>,
    );
  });
});
