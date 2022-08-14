import { render } from '@testing-library/react';
import Docs from '../Pages/Docs/Docs';

describe('<Docs/> component', () => {
    it('component should render',() => {
        render(<Docs />);
    });

    it('snapshpt should match',() => {
        const { container } = render(<Docs />);
        expect(container).toMatchSnapshot();
    });
})