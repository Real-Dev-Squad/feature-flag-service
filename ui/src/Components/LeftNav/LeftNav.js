import { NAV } from '../../Constant/constant';

export default function LeftNav(){
    return(
        <nav>
            <ul>
                <li>
                    {NAV.FLAGS}
                </li>
                <li>
                    {NAV.CREATE_USERS}
                </li>
                <li>
                    {NAV.DOCS}
                </li>
                <li>
                    {NAV.SDK}
                </li>
            </ul>
        </nav>
    )
}