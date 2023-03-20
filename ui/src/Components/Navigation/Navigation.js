import { NavLink } from "react-router-dom";
import { NAV } from '../../Constant/routes';

export default function LeftNav(){
    const createNavigation = () => {
        return NAV.map((item, key) => {
            if(item.visible){
                return <li key={key} className='text-blue-600 hover:underline text-sm py-1'>
                  <NavLink to={item.path}>{item.name}</NavLink> 
                </li>
            }
            return null;
        })
    }
    return(
        <nav className='px-3'>
            <ul>
               {createNavigation()} 
            </ul>
        </nav>
    )
}