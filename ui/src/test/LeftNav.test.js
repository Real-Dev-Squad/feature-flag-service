import { render } from '@testing-library/react';
import { Link,MemoryRouter as Router } from 'react-router-dom';
import LeftNav from '../Components/LeftNav/LeftNav';

describe('<LeftNav/> component', () => {
    it('component should render',() => {
        render(<Router><LeftNav /></Router>);
    });
})