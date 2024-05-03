import { render, screen, logRoles } from '@testing-library/react';

import OverviewCase from '../index';

describe('OverviewCase', () => {
  test('should render the project List', async () => {
    const { container } = render(<OverviewCase />);
    logRoles(container);

    // const projectListPanels =
    //   await screen.findAllByTestId('project-list-panel');
    // expect(projectListPanels).toHaveLength(1);
  });
});
