import { render } from '@testing-library/react';
import CreateProject from '../content/dashboards/OverviewCase/CreateProject';

test('should create new project', async () => {
  render(<CreateProject handleCreateProjectClose={() => {}} />);
});
