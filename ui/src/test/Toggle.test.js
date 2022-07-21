import { fireEvent,userEvent, render, screen } from "@testing-library/react";
import Toggle from '../Components/Global/Toggle/Toggle'
import sinon from 'sinon';

describe("Toggle Component", () => {

  it("Should render the Toggle Component", () => {
    render(<Toggle />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument();
  })

  it("Should be active", () => {
    render(<Toggle active={true}/>)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute("checked");
  })
  
  it("Should not be active", () => {
    render(<Toggle active={false}/>)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toHaveAttribute("checked");
  })

  it.skip("Should fire event on click", async () => {
    const mockFn = sinon.spy();
    render(<Toggle changeHandler={mockFn}/>)

    const checkbox = screen.getByRole('checkbox')
    await fireEvent.click(checkbox);
    expect(mockFn).toBeCall();
    
  })

}) 