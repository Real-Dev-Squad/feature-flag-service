import { render } from '@testing-library/react';
import Layout from '../Components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Layout /> component', () => {
    it('component should render',() => {
        render(<Router><Layout /></Router>);
    });
  
})