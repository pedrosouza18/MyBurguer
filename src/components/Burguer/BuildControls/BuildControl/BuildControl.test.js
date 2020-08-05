import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import BuildControl from './BuildControl'

describe('Tests about build control component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should click once on less button', () => {
    const mockLessButton = jest.fn()
    const {getByTitle} = render(<BuildControl removed={mockLessButton} />)
    const lessButton = getByTitle(/less quantity/i)
    fireEvent.click(lessButton)
    expect(mockLessButton).toHaveBeenCalledTimes(1)
  })

  test('should show less button disabled', () => {
    const {getByTitle} = render(<BuildControl disabled={true} />)
    const lessButton = getByTitle(/less quantity/i)
    expect(lessButton).toHaveAttribute('disabled')
  })

  test('should click once on more button', () => {
    const mockMoreButton = jest.fn()
    const {getByTitle} = render(<BuildControl added={mockMoreButton} />)
    const moreButton = getByTitle(/more quantity/i)
    fireEvent.click(moreButton)
    expect(mockMoreButton).toHaveBeenCalledTimes(1)
  })

  test('should Meat label on build control component', () => {
    const {getByTitle} = render(<BuildControl label="Meat" />)
    const meatLabel = getByTitle(/name ingredient/i)
    expect(meatLabel).toHaveTextContent(/meat/i)
  })
})
