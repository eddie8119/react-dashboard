import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OverviewCase from '../index';

test('opens and closes the create project dialog', async () => {
  render(<OverviewCase />);

  const createProjectButton = screen.getByRole('button', {
    name: /create project/i,
  });
  await userEvent.click(createProjectButton);
  const createProjectDialog = screen.getByRole('dialog');
  expect(createProjectDialog).toBeInTheDocument();

  const closeIcon = screen.getByRole('button', {
    name: /close/i,
  });
  await userEvent.click(closeIcon);
  expect(createProjectDialog).not.toBeInTheDocument();
});
