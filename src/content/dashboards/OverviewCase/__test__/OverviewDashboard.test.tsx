import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import OverviewDashboard from '../OverviewDashboard.tsx';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('OverviewDashboard', () => {
  test('OverviewDashboard can render the correct titles', () => {
    render(<OverviewDashboard />);

    expect(
      screen.getByText('overviewCase.overviewDashboard.Project-Cost'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('overviewCase.overviewDashboard.Project-Revenue'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('overviewCase.overviewDashboard.Project-Profit'),
    ).toBeInTheDocument();
  });

  test(' the correct charts are rendered', () => {
    render(<OverviewDashboard />);

    expect(screen.getByTestId('project-cost-chart')).toBeInTheDocument();
    expect(screen.getByTestId('project-sell-chart')).toBeInTheDocument();
    expect(screen.getByTestId('project-profit-chart')).toBeInTheDocument();
  });
});
