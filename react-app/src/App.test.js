import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const element = screen.queryByText(/learn react/i);
  // expect(element).not.toBeInTheDocument();
  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});
