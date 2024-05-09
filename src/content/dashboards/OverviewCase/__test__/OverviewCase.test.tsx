import { render, screen } from '@testing-library/react';
import OverviewCase from '../index';

describe('OverviewCase', () => {
  test('should render the children components', () => {
    render(<OverviewCase />);

    expect(screen.getByTestId('OverviewDashboard')).toBeInTheDocument();
    expect(screen.getByTestId('create-project-btn')).toBeInTheDocument();
    expect(screen.getByTestId('ProjectSelect')).toBeInTheDocument();
    expect(screen.getByTestId('ProjectListPanel')).toBeInTheDocument();
  });
});
