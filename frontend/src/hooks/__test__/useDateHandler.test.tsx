import useDateHandler from '../useDateHandler';
import { renderHook } from '@testing-library/react';

describe('useDateHandler', () => {
  test('should return formatted date string', () => {
    const time = '2024-03-20T15:03:05.138Z';
    const { result } = renderHook(() => useDateHandler(time));
    expect(result.current).toEqual('2024-03-20');
  });
});
