import { render } from '@testing-library/react';
import Home from '../Pages/Home/Home';

describe('<Home/> component', () => {
    it('component should render',() => {
        render(<Home />);
    });
})