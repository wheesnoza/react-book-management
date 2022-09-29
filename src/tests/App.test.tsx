import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Login } from '@/pages';

describe('App', () => {
  it('Renders login page', () => {
    render(<Login />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Login');
  });
});
