import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "../Constant/constant";
import Docs from '../Pages/Docs/Docs';
import Sdk from '../Pages/Sdk/Sdk';
import Users from '../Pages/Users/Users';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

export default function RootRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path={PATH.DOCS} element={<Docs /> } />
            <Route path={PATH.SDK} element={<Sdk /> } />
            <Route path={PATH.CREATE_USERS} element={<Users /> } />
            <Route path="*" element={<NotFound /> } />
        </Routes>
       </BrowserRouter>
    )
}