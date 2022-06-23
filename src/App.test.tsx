import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog link', () => {
  render(<App />);
  const linkElement = screen.getByText(/blog/i);
  expect(linkElement).toBeInTheDocument();
});
