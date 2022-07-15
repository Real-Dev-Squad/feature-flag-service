import { render, screen } from '@testing-library/react';
import Footer from './../Components/Footer/Footer';

describe("Footer component", () => {
    it("Should render footer component",() => {
       render(<Footer />);
    })

    it("Should have RDS Website Link", () => {
        render(<Footer />);
        const RDSLink = screen.getByRole('link',{ name: 'RDS Website' });
        expect(RDSLink).toBeInTheDocument();
    })

    it("Should have RDS Discord Link", () => {
        render(<Footer />);
        const RDSLink = screen.getByRole('link',{ name: 'Discord server' });
        expect(RDSLink).toBeInTheDocument();
    })

    it("Should have 2 Link", () => {
        render(<Footer />);
        const RDSLink = screen.getAllByRole('link');
        expect(RDSLink).toHaveLength(2);
    })

    it("Should have copyright text", () => {
        render(<Footer />);
        const copyrightLink = screen.getByText('Copyright 2022-2023');
        expect(copyrightLink).toBeInTheDocument();
    })
})