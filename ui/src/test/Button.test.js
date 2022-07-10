import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Global/Button/Button";
import sinon from 'sinon';

describe("Button Component", () => {

  it("Should render the button", () => {
      render(<Button />)
      
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument();
  })

  it("Should render the text", () => {
      render(<Button text='test' />)

      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('test');
  })

  it("Should fire event on click", async () => {
      const mockCallBack = sinon.spy();
      render(<Button onClick={mockCallBack} />);

      const button = screen.getByRole('button'); 

      await fireEvent.click(button);
      expect(mockCallBack.callCount).toEqual(1);
  })

  it("Should contain classNames passed as props", () => {
      const { container } = render(<Button className={'test1 test2'} />);

      expect(container.firstChild.classList.contains('test1')).toBe(true)
      expect(container.firstChild.classList.contains('test2')).toBe(true)
  })
})