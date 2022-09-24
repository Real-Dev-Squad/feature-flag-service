import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NAV } from "../Constant/routes";

export default function RootRoute(){
    const createNavigation = () => {
        return NAV.map((item, key) => {
            const Element = item.element;
            return <Route path={item.path} element={Element} />;
        })
    }
    return(
        <BrowserRouter>
        <Routes>
            {createNavigation()}
        </Routes>
       </BrowserRouter>
    )
}