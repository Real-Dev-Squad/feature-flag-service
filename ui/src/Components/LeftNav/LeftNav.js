import { Link } from "react-router-dom";
import { NAV, PATH } from '../../Constant/constant';

export default function LeftNav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to={PATH.HOME}>{NAV.FLAGS}</Link>
                </li>
                <li>
                    <Link to={PATH.CREATE_USERS}>{NAV.CREATE_USERS}</Link>
                </li>
                <li>
                    <Link to={PATH.DOCS}>{NAV.DOCS}</Link>
                </li>
                <li>
                    <Link to={PATH.SDK}>{NAV.SDK}</Link>
                </li>
            </ul>
        </nav>
    )
}