import { Link } from "react-router-dom";
import { NAV, PATH } from '../../Constant/constant';

export default function LeftNav(){
    const LEFTNAV = {
        'name': 'value'
    }
    const createNavigation = () => {
        for(let i in LEFTNAV){
            return <li className='text-blue-600 hover:underline text-sm py-1'>
            <Link to={PATH.HOME}>{NAV.FLAGS}</Link> 
        </li>
        }
    }
    return(
        <nav className='px-3'>
            <ul>
                
                {/* <li className='text-blue-600 hover:underline text-sm py-1'>
                    <Link to={PATH.HOME}>{NAV.FLAGS}</Link> 
                </li>
                <li className='text-blue-600 hover:underline text-sm py-1'>
                    <Link to={PATH.CREATE_USERS}>{NAV.CREATE_USERS}</Link>
                </li>
                <li className='text-blue-600 hover:underline text-sm py-1'>
                    <Link to={PATH.DOCS}>{NAV.DOCS}</Link>
                </li>
                <li className='text-blue-600 hover:underline text-sm py-1'>
                    <Link to={PATH.SDK}>{NAV.SDK}</Link>
                </li> */}
            </ul>
        </nav>
    )
}