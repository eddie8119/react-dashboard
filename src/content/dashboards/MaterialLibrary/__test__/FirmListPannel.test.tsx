import { render, screen } from '@testing-library/react';
import FirmListPannel from '../FirmListPannel';

describe('FirmListPannel', () => {
  test('should render title "Construction Type" text', () => {
    render(<FirmListPannel />);
    const headingElement = screen.getByText(/Construction Type/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('should displays firm buttons', async () => {
    render(<FirmListPannel />);
    const buttons = await screen.findAllByRole('firm-button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('拆除');
  });
});
