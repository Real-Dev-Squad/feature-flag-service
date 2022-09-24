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
        element: <Home />
    },
    {
        name: "Create Users",
        path:  "/users",
        element:  <Users />

    },
    {
        name: "Flags",
        path:  "/flags",
        element: <Flags />
    },
    {
        name: "SDK",
        path:  "/SDK",
        element: <Sdk />
    },
    {
        name: "Docs",
        path:  "/docs",
        element: <Docs />
    },
    {
        path: "*",
        element: <NotFound />
    }
]