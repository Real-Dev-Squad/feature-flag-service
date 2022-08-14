import { render } from '@testing-library/react';
import Sdk from '../Pages/Sdk/Sdk';

describe('<Sdk/> component', () => {
    it('component should render',() => {
        render(<Sdk />);
    });

    it('snapshpt should match',() => {
        const { container } = render(<Sdk />);
        expect(container).toMatchSnapshot();
    });
})