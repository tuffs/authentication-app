import React from 'react'
import { render, screen } from '@testing-library/react'
import Heading from '@/components/ui/Heading'

describe('Heading', () => {
  it('renders the title and description', () => {
    render(
      <Heading
        title="Test Title"
        description="Test Description"
        divClassName="test-div-class"
        headingClassName="test-heading-class"
        paragraphClassName="test-paragraph-class"
      />
    )

    const title = screen.getByText('Test Title')
    const description = screen.getByText('Test Description')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(title).toHaveClass('test-heading-class')
    expect(description).toHaveClass('test-paragraph-class')
  })
})