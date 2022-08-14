import { render } from '@testing-library/react';
import LeftNav from '../Components/LeftNav/LeftNav';

describe('<LeftNav/> component', () => {
    it('component should render',() => {
        render(<LeftNav />);
    });
})