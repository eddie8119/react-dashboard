import usePopup from '../usePopup';
import { renderHook, act } from '@testing-library/react';

describe('usePopup', () => {
  test('openComfirmPop initial state is false', () => {
    const { result } = renderHook(() => usePopup());
    const { openComfirmPop } = result.current;
    expect(openComfirmPop).toEqual(false);
  });

  test('openComfirmPop can open and close', () => {
    const { result } = renderHook(() => usePopup());
    const { handlePopOpen, handlePopClose } = result.current;

    act(() => {
      handlePopOpen();
    });

    const { openComfirmPop } = result.current;
    expect(openComfirmPop).toEqual(true);

    act(() => {
      handlePopClose();
    });

    expect(result.current.openComfirmPop).toEqual(false);
  });
});
