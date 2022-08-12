import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const text = screen.getByText(/Fluid Container/i)

    expect(text).toBeInTheDocument()
  })
})
