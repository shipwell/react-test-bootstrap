import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  test('should render with greetings :)', () => {
    render(<App />);
    const linkElement = screen.getByText(/happy codding/i);
    expect(linkElement).toBeInTheDocument();
  });
})