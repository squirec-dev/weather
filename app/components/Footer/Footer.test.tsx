import { render } from '@testing-library/react'
import Footer from './index'

describe('components/Footer', () => {
  it('renders homepage unchanged', () => {
    const { getByRole } = render(<Footer />)
    expect(getByRole('contentinfo').textContent).toBe("Footer");
  })
})
