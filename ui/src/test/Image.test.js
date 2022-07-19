import { render, screen } from "@testing-library/react";
import Image from '../Components/Global/Image/Image'

describe("Image Component", () => {

  it("Should render the Image Component", () => {
      render(<Image />)
      
      const imageElement = screen.getByRole('img')
      expect(imageElement).toBeInTheDocument();
  })

  it("Should display the appropriate image", () => {
      render(<Image src={'testURL'}/>)

      const imageElement = screen.getByRole('img')
      expect(imageElement).toHaveAttribute('src', 'testURL');
  })

  it("Should have an alt tag when passed as prop", () => {
    render(<Image src={'testURL'} alt={'testAlt'}/>)

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('alt', 'testAlt');
  })
})