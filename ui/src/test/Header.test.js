import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe("Test Header component", () => {
    
    beforeEach(() => {
        render(<Header />);
    })

    it("should have image tag",() =>{
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    })

    // to mock this data we have to make a img component that 
    // will accept src and alt as props
    it("should have src tag",() =>{
        const MOCK_IMG_SRC = "https://res.cloudinary.com/realdevsquad/image/upload/v1649837643/profile/EYNHBSK7riBKY775OOMB/mfzbgspqgvj6unz34unm.jpg";
        const imageElement = screen.getByRole('img',{ 'src': MOCK_IMG_SRC});
        expect(imageElement).toBeInTheDocument();
    })

    it("should have alt tag",() =>{
        const MOCK_IMG_ALT = "User Picture";
        const imageElement = screen.getByRole('img', { 'alt': MOCK_IMG_ALT});
        expect(imageElement).toBeInTheDocument();
    })

    it("should match the snapshot",() =>{
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    })
})