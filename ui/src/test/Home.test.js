import { render } from '@testing-library/react';
import Home from '../Pages/Home/Home';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Home/> component', () => {
    it('component should render',() => {
        render(<Router><Home /></Router>);
    });
    
})