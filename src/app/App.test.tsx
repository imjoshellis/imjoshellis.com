import App from './App'
import { render } from './node_modules/@testing-library/react'
import React from './node_modules/react'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
