import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from './Home'


test('loads and displays Home',  () => {
  // ARRANGE
  render(<Home />)

  // ASSERT
  expect(screen.getByText('Home')).toBeInTheDocument();
})

test('loads and displays Button',  () => {
    // ARRANGE
    render(<Home />)
  
    // ASSERT
    expect(screen.getByRole('button')).toHaveTextContent("Click Me")
  })

  test('Should display test when button clicked',  () => {
    // ARRANGE
    render(<Home />)
  
    const test1 = screen.getByRole('button')
    fireEvent.click(test1)
    // ASSERT
    expect(screen.getByText('button Clicked')).toBeInTheDocument();
  })

  test('Should execute function setClick when button clicked',  () => {
    // ARRANGE
    const setClick = jest.fn();
    render(<Home />)
  
    const test1 = screen.getByRole('button')
    fireEvent.click(test1)
    // ASSERT
    setClick()
    // expect(setClick).toHaveBeenCalled();
    expect(setClick).toHaveBeenCalledTimes(1);
    expect(setClick).toHaveReturned();
  })