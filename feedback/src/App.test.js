import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App from './App';

test('renders the app and shows the form correctly', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(`radio.question`)
});

test('question 1 shows error if no option is chosen', () => {
  render(<App />);
  fireEvent.click(screen.getByText(`button.next`))
  expect(screen.getByTestId('radioError')).toHaveTextContent(`form.error`)
})
