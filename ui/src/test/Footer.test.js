import { render, screen } from '@testing-library/react';
import Footer from './../Components/Footer/Footer';
import { FOOTER} from '../Constant/constant'

describe("Footer component", () => {
    it("Should render footer component",() => {
       render(<Footer />);
    })

    it("Should have RDS Website Link", () => {
        render(<Footer />);
        const RDSLink = screen.getByRole('link',{ name: FOOTER.RDS_WEBSITE });
        expect(RDSLink).toBeInTheDocument();
    })

    it("Should have RDS Discord Link", () => {
        render(<Footer />);
        const RDSLink = screen.getByRole('link',{ name: FOOTER.DISCORD_SERVER });
        expect(RDSLink).toBeInTheDocument();
    })

    it("Should have 2 Link", () => {
        render(<Footer />);
        const RDSLink = screen.getAllByRole('link');
        expect(RDSLink).toHaveLength(2);
    })

    it("Should have copyright text", () => {
        render(<Footer />);
        const copyrightLink = screen.getByText(FOOTER.COPYRIGHT);
        expect(copyrightLink).toBeInTheDocument();
    })

    it("Should match the snapshot", () =>{
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
      })
})