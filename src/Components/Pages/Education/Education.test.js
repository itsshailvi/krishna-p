import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Education from './Education'


test('loads and displays Home',  () => {
  // ARRANGE
  render(<Education />)

  // ASSERT
  expect(screen.getByText('Education')).toBeInTheDocument();
})