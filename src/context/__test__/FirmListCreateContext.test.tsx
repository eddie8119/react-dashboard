import { useContext } from 'react';
import { render } from '@testing-library/react';
import FirmListCreateContext from '../FirmListCreateContext.tsx';
import { vi } from 'vitest';

describe('FirmListCreateContext', () => {
  const mockValue = {
    updateFirmList: false,
    firmLists: [
      {
        id: '0',
        name: '拆除',
      },
      {
        id: '1',
        name: '機電',
      },
    ],
    handlerSetUpdateFirmList: vi.fn(),
  };

  test('FirmListCreateContext can get firmLists data', () => {
    const TestComponent = () => {
      const { firmLists } = useContext(FirmListCreateContext);

      expect(firmLists).toEqual([
        {
          id: '0',
          name: '拆除',
        },
        {
          id: '1',
          name: '機電',
        },
      ]);

      return <div>Test Component</div>;
    };

    render(
      <FirmListCreateContext.Provider value={mockValue}>
        <TestComponent />
      </FirmListCreateContext.Provider>,
    );
  });
  test('updateFirmList is defined and init value is correct', () => {
    const TestComponent = () => {
      const { updateFirmList } = useContext(FirmListCreateContext);
      expect(updateFirmList).toBe(false);
      return <div>Test Component</div>;
    };

    render(<TestComponent />);
  });

  test('handlerSetUpdateFirmList is defined and can be called', () => {
    const TestComponent = () => {
      const { handlerSetUpdateFirmList } = useContext(FirmListCreateContext);
      handlerSetUpdateFirmList();
      expect(handlerSetUpdateFirmList).toHaveBeenCalled();
      return <div>Test Component</div>;
    };

    render(
      <FirmListCreateContext.Provider value={mockValue}>
        <TestComponent />
      </FirmListCreateContext.Provider>,
    );
  });
});
