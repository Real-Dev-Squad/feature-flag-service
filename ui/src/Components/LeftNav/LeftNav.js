import { Link } from "react-router-dom";
import { NAV } from '../../Constant/constant';

export default function LeftNav(){
    const createNavigation = () => {
        return Object.keys(NAV).map(function(key){
            return <li role="listitem" key={key} className='text-blue-600 hover:underline text-sm py-1'>
            <Link to={NAV[key]}>{key}</Link> </li>
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