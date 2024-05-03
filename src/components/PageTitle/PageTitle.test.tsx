import { render, screen } from '@testing-library/react';
import PageTitle from './index';

describe('PageTitle', () => {
  test('renders PageTitle with correct props', () => {
    render(<PageTitle title="Test Title" />);

    const title = screen.getByText('Test Title');

    expect(title).toBeInTheDocument();
  });
});
