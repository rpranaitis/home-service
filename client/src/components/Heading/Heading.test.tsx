import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading';

describe('Heading check', () => {
  test('renders heading', () => {
    render(<Heading children={undefined} />);
    expect(document.querySelector('h1')).toBeInTheDocument();
  });
});
