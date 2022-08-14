import { render } from '@testing-library/react';
import Layout from '../Components/Layout/Layout';

describe('<Layout/> component', () => {
    it('component should render',() => {
        render(<Layout />);
    });
})