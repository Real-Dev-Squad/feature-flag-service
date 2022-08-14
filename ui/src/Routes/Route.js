import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "../Constant/constant";
import Home from '../Pages/Home/Home';
import Docs from '../Pages/Docs/Docs';
import Sdk from '../Pages/Sdk/Sdk';
import Users from '../Pages/Users/Users';
import Flags from '../Pages/Flags/Flags';
import NotFound from '../Pages/NotFound/NotFound';

export default function RootRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={PATH.HOME} element={<Home /> } />
            <Route path={PATH.DOCS} element={<Docs /> } />
            <Route path={PATH.SDK} element={<Sdk /> } />
            <Route path={PATH.FLAGS} element={<Flags /> } />
            <Route path={PATH.CREATE_USERS} element={<Users /> } />
            <Route path="*" element={<NotFound /> } />
        </Routes>
       </BrowserRouter>
    )
}