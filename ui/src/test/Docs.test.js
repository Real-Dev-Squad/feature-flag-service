import { render } from '@testing-library/react';
import Docs from '../Pages/Docs/Docs';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Docs/> component', () => {
    it('component should render',() => {
        render(<Router><Docs /></Router>);
    });

    it('snapshot should match',() => {
        const { container } = render(<Router><Docs /></Router>);
        expect(container).toMatchSnapshot();
    });
})