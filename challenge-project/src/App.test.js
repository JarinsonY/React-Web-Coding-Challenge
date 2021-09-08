import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stolen bykes/i);
  expect(linkElement).toBeInTheDocument();
});
