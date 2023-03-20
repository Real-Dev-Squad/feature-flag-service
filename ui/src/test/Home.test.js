import { render } from '@testing-library/react';
import Home from '../Pages/Home/Home';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Home/> component', () => {
    it('should match snapshot', () => {
        const { container } = render(<Router><Home /></Router>);
        expect(container).toMatchSnapshot();
    })
    
})