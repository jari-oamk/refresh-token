import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the home page heading', () => {
  render(React.createElement(BrowserRouter, null, React.createElement(App)));
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
