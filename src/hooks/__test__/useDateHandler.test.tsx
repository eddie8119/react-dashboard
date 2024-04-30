import useDateHandler from '../useDateHandler';

describe('useDateHandler', () => {
  test('should return formatted date string', () => {
    const time = '2024-03-20T15:03:05.138Z';
    const result = useDateHandler(time);
    expect(result).toBe('2024-03-20');
  });
});
