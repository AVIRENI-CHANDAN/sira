import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthPage from './AuthPage';

describe('<AuthPage />', () => {
  test('it should mount', () => {
    render(<AuthPage />);

    const authPage = screen.getByTestId('AuthPage');

    expect(authPage).toBeInTheDocument();
  });
});