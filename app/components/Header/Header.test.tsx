import { render } from '@testing-library/react';
import Header from './index';

describe('components/Footer', () => {
  const mockComponent = (
    props?: Record<string, any>,
  ) => {
    return (
      <Header {...props} />
    );
  };

  it('renders a logo and title', () => {
    const { getByRole } = render(mockComponent());
    expect(getByRole('img', { name: 'logo' })).toBeTruthy();
    expect(
      getByRole('heading', {level: 1}).textContent
    ).toBe('Weather for ducks?');
  })
})
