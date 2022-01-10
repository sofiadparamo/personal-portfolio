import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projects I've Worked On/i);
  expect(linkElement).toBeInTheDocument();
});
