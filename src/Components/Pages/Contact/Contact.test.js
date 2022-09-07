import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ContactMe from './ContactMe'


test('loads and displays Contact',  () => {
  // ARRANGE
  render(<ContactMe />)

  // ASSERT
  expect(screen.getByText('ContactMe')).toBeInTheDocument();
})