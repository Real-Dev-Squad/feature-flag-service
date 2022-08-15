import { render, screen } from '@testing-library/react';
import { Link, MemoryRouter as Router } from 'react-router-dom';
import LeftNav from '../Components/LeftNav/LeftNav';

const NAV = {
    "Home" : "/",
    "Create Users" : "/users",
    "Flags" : "/flags",
    "SDK" : "/sdk",
    "Docs" : "/docs",
}

describe('<LeftNav/> component', () => {
    it('component should render',() => {
        render(<Router><LeftNav /></Router>);
    });
    it('should have UL',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('list');
        expect(element).toBeInTheDocument();
    });
    it('should have LIs',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getAllByRole('listitem');
        expect(element).toHaveLength(5);
    });
    it('should have Home',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('link',{ name: 'Home', href: '/'});
        expect(element).toBeInTheDocument();
    });
    it('should have Create Users',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('link',{ name: 'Create Users', href: '/users'});
        expect(element).toBeInTheDocument();
    });
    it('should have Flags',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('link',{ name: 'Flags', href: '/flags'});
        expect(element).toBeInTheDocument();
    });
    it('should have SDK',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('link',{ name: 'SDK', href: '/sdk'});
        expect(element).toBeInTheDocument();
    });
    it('should have Docs',() => {
        render(<Router><LeftNav /></Router>);
        const element = screen.getByRole('link',{ name: 'Docs', href: '/docs'});
        expect(element).toBeInTheDocument();
    });
})