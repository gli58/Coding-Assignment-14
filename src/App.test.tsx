import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Gavin Li/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
