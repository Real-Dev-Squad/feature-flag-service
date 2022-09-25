import Home from '../Pages/Home/Home';
import Docs from '../Pages/Docs/Docs';
import Sdk from '../Pages/Sdk/Sdk';
import Users from '../Pages/Users/Users';
import Flags from '../Pages/Flags/Flags';
import NotFound from '../Pages/NotFound/NotFound';

export const NAV = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
        visible: true
    },
    {
        name: "Create Users",
        path:  "/users",
        element:  <Users />,
        visible: true

    },
    {
        name: "Flags",
        path:  "/flags",
        element: <Flags />,
        visible: true
    },
    {
        name: "SDK",
        path:  "/SDK",
        element: <Sdk />
    },
    {
        name: "Docs",
        path:  "/docs",
        element: <Docs />,
        visible: true
    },
    {
        path: "*",
        element: <NotFound />,
        visible: false
    }
]