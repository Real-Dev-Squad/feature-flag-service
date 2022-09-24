import { NavLink } from "react-router-dom";
import { NAV } from '../../Constant/constant';

export default function LeftNav(){
    const createNavigation = () => {
        return Object.keys(NAV).map(function(key){
            return <li role="listitem" key={key} className='text-blue-600 hover:underline text-sm py-1'>
            <NavLink to={NAV[key]}>{key}</NavLink> </li>
        })
    }
    return(
        <nav className='px-3'>
            <ul role="list">
               {createNavigation()} 
            </ul>
        </nav>
    )
}