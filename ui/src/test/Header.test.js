import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/Header/Header';
import { USER } from './Fixtures/user';

describe("Test Header component", () => {
    
    beforeEach(() => {
        render(<Header user={USER}/>);
    })

    it("Should have image tag", () => {
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    })

    it("Should have src tag", () => {
        const MOCK_IMG_SRC = USER.picture.url;
        const imageElement = screen.getByRole('img', { 'src': MOCK_IMG_SRC });
        expect(imageElement).toBeInTheDocument();
    })

    it("Should have heading at top level", () => {
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
    })

    it("Should have heading username", () => {
        const username = USER.github_display_name;
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent(username);
    })

    it("Should have logout button", () => {
        const logoutButton = screen.getByRole('button');
        expect(logoutButton).toHaveTextContent('Logout');
    })

    it("Should match the snapshot", () =>{
      const { container } = render(<Header user={USER}/>);
      expect(container).toMatchSnapshot();
    })
})