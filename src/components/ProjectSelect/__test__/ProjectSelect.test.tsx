import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectSelect from '../index';

test('changes the category selection', async () => {
  render(<ProjectSelect />);

  const categorySelect = screen.getByLabelText('category');
  await userEvent.selectOptions(categorySelect, 'House');

  expect(categorySelect).toHaveValue('House');
});

test('changes the keyword search', async () => {
  render(<ProjectSelect />);

  const searchInput = screen.getByLabelText('search name');
  await userEvent.type(searchInput, 'test');

  expect(searchInput).toHaveValue('test');
});
