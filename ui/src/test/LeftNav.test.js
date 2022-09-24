import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';

describe('<Navigation/> component', () => {
    it('component should render',() => {
        render(<Router><Navigation /></Router>);
    });
    it('should have UL',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('list');
        expect(element).toBeInTheDocument();
    });
    it('should have LIs',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getAllByRole('listitem');
        expect(element).toHaveLength(5);
    });
    it('should have Home',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('link',{ name: 'Home', href: '/'});
        expect(element).toBeInTheDocument();
    });
    it('should have Create Users',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('link',{ name: 'Create Users', href: '/users'});
        expect(element).toBeInTheDocument();
    });
    it('should have Flags',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('link',{ name: 'Flags', href: '/flags'});
        expect(element).toBeInTheDocument();
    });
    it('should have SDK',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('link',{ name: 'SDK', href: '/sdk'});
        expect(element).toBeInTheDocument();
    });
    it('should have Docs',() => {
        render(<Router><Navigation /></Router>);
        const element = screen.getByRole('link',{ name: 'Docs', href: '/docs'});
        expect(element).toBeInTheDocument();
    });
})