import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import useGetFirmLists from '../useGetFirmLists';

describe('useGetFirmLists', () => {
  test('should return an array of firmLists', async () => {
    const { result } = renderHook(() => useGetFirmLists());

    await waitFor(() => {
      expect(result.current).toEqual([
        { id: '0', name: '拆除' },
        { id: '1', name: '機電' },
      ]);
    });
  });
});
