import { render } from '@testing-library/react';
import Sdk from '../Pages/Sdk/Sdk';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Sdk/> component', () => {

    it('snapshot should match',() => {
        const { container } = render(<Router><Sdk /></Router>);
        expect(container).toMatchSnapshot();
    });
    
})