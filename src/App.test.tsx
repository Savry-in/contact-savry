// import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';

describe('App Routing', () => {
  test('renders DefaultPage when at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const defaultElement = screen.getByText(/Smarter Kitchen, Smarter You/i);
    expect(defaultElement).toBeInTheDocument();
  });
});

